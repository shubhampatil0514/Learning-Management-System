from django.db import models
from django.contrib.auth.backends import ModelBackend
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

class CustomStudentManager(BaseUserManager):
    def create_user(self, email, username, password=None, profile_img=None, **extra_fields):
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, profile_img=profile_img, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password=None, profile_img=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, username, password, profile_img, **extra_fields)

class CustomStudent(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=30)
    profile_img = models.ImageField(upload_to='student_profile/', default="")
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    quiz_results = models.PositiveIntegerField(default=0)

    objects = CustomStudentManager()
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='student_groups',
        blank=True,
        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='student_user_permissions',
        blank=True,
        help_text='Specific permissions for this user.',
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email

class CustomStudentBackend(ModelBackend):
    def authenticate(self, request=None, email=None, password=None, **kwargs):
        try:
            user = CustomStudent.objects.get(email=email)
        except CustomStudent.DoesNotExist:
            return None

        if user.check_password(password) and self.user_can_authenticate(user):
            return user
        return None

    def get_user(self, user_id):
        try:
            return CustomStudent.objects.get(pk=user_id)
        except CustomStudent.DoesNotExist:
            return None
