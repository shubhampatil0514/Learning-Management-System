from django.urls import path
from .views import student_register, student_login, get_student_details

urlpatterns = [
    path('register', student_register, name='student_register'),
    path('login', student_login, name='student_login'),
    path('profile/<int:student_id>/', get_student_details, name='get_student_details'),
   
]