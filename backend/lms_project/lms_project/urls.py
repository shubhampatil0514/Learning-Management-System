from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('teacher/', include('teacher_app.urls')),
    path('student/', include('student_app.urls')),
    path('quize/', include('quize_app.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

