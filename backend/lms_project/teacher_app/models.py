from django.db import models
from django.contrib.auth.backends import ModelBackend
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

class CustomTeacherManager(BaseUserManager):
    def create_user(self, email, username, password=None, profile_img=None, **extra_fields):
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, profile_img=profile_img, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_teacher(self, email, username, password=None, profile_img=None, **extra_fields):
        extra_fields.setdefault('is_teacher', True)
        return self.create_user(email, username, password, profile_img, **extra_fields)

    def create_superuser(self, email, username, password=None, profile_img=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_teacher', True)  # Superuser is also a teacher

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, username, password, profile_img, **extra_fields)

class CustomTeacher(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=30)
    profile_img = models.ImageField(upload_to='teacher_profile/', default="")
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_teacher = models.BooleanField(default=True)  

    objects = CustomTeacherManager()

    groups = models.ManyToManyField(
        'auth.Group',
        related_name='teacher_groups',
        blank=True,
        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='teacher_user_permissions',
        blank=True,
        help_text='Specific permissions for this user.',
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email

class CustomTeacherBackend(ModelBackend):
    def authenticate(self, request, email=None, password=None, **kwargs):
        try:
            user = CustomTeacher.objects.get(email=email)
        except CustomTeacher.DoesNotExist:
            return None

        if user.check_password(password) and self.user_can_authenticate(user):
            return user
        return None

    def get_user(self, user_id):
        try:
            return CustomTeacher.objects.get(pk=user_id)
        except CustomTeacher.DoesNotExist:
            return None

class Lecture(models.Model):
    teacher = models.ForeignKey(CustomTeacher, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    date = models.DateField()
    time = models.TimeField()

    def __str__(self):
        return self.title