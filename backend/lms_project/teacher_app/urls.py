from django.urls import path
from .views import teacher_register, teacher_login, get_teacher_details, create_lecture, total_teachers, get_all_lectures


urlpatterns = [
    path('register', teacher_register, name='teacher_register'),
    path('login', teacher_login, name='teacher_login'),
    path('profile/<int:teacher_id>/', get_teacher_details, name='get_student_details'),
    path('lecture/create/<str:teacher_email>', create_lecture, name='create_lecture'),
     path('lecture', get_all_lectures, name='get_all_lectures'),
    path('total', total_teachers, name='total_teachers'),
]

