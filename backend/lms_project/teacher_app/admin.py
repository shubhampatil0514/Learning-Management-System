from django.contrib import admin
from .models import CustomTeacher
from .models import Lecture

admin.site.register(CustomTeacher)
admin.site.register(Lecture)