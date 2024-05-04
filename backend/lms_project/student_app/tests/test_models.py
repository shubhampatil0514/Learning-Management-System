from django.test import TestCase
from django.contrib.auth import get_user_model

from student_app.models import CustomStudent, CustomStudentBackend


class CustomStudentModelTests(TestCase):
    def test_create_user(self):
        User = get_user_model()
        user = User.objects.create_user(
            email='test@example.com',
            username='testuser',
            password='password123',
        )
        self.assertEqual(user.email, 'test@example.com')
        self.assertEqual(user.username, 'testuser')
        self.assertTrue(user.is_active)
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_superuser)

    def test_create_superuser(self):
        User = get_user_model()
        admin_user = User.objects.create_superuser(
            email='admin@example.com',
            username='adminuser',
            password='password123',
        )
        self.assertEqual(admin_user.email, 'admin@example.com')
        self.assertEqual(admin_user.username, 'adminuser')
        self.assertTrue(admin_user.is_active)
        self.assertTrue(admin_user.is_staff)
        self.assertTrue(admin_user.is_superuser)

class CustomStudentBackendTests(TestCase):
    def setUp(self):
        self.user = CustomStudent.objects.create_user(
            email='test@example.com',
            username='testuser',
            password='password123',
        )
        self.backend = CustomStudentBackend()

    def test_authenticate_with_valid_credentials(self):
        user = self.backend.authenticate(email='test@example.com', password='password123')
        self.assertIsNotNone(user)
        self.assertEqual(user, self.user)

    def test_authenticate_with_invalid_credentials(self):
        user = self.backend.authenticate(email='test@example.com', password='wrongpassword')
        self.assertIsNone(user)

    def test_get_user(self):
        user = self.backend.get_user(self.user.id)
        self.assertIsNotNone(user)
        self.assertEqual(user, self.user)

    def test_get_user_with_invalid_id(self):
        user = self.backend.get_user(999)  # Assuming there's no user with id 999
        self.assertIsNone(user)
