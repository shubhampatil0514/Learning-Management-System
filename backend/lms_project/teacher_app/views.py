from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth import login
from .models import CustomTeacher, Lecture
from rest_framework_simplejwt.tokens import RefreshToken
import base64
from .serializers import TeacherRegistrationSerializer, TeacherLoginSerializer, TeachertDetailSerializer, LectureSerializer


@api_view(['POST'])
@permission_classes([AllowAny])
def teacher_register(request):
    if request.method == 'POST':
        serializer = TeacherRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
def teacher_login(request):
    if request.method == 'POST':
        serializer = TeacherLoginSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            user = serializer.validated_data['user']
            login(request, user)

            # Base64 encode teacher_id and teacher_email
            teacher_id_base64 = base64.b64encode(str(user.id).encode()).decode()
            teacher_email_base64 = base64.b64encode(user.email.encode()).decode()

            refresh = RefreshToken.for_user(user)
            payload = {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'teacher_id_base64': teacher_id_base64,
                'teacher_email_base64': teacher_email_base64,
            }

            return Response(payload, status=status.HTTP_200_OK)
        return Response({'detail': 'Invalid email or password.'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_teacher_details(request, teacher_id):
    try:
        teacher = CustomTeacher.objects.get(id=teacher_id)
    except CustomTeacher.DoesNotExist:
        return Response({'detail': 'Teacher not found'}, status=status.HTTP_404_NOT_FOUND)

    serializer = TeachertDetailSerializer(teacher)
    return Response(serializer.data)

@api_view(['POST'])
def create_lecture(request, teacher_email):
    
    try:
        teacher = CustomTeacher.objects.get(email=teacher_email)
        
    except CustomTeacher.DoesNotExist:
        return Response({'detail': 'Teacher not found'}, status=status.HTTP_404_NOT_FOUND)

    serializer = LectureSerializer(data=request.data)
    if serializer.is_valid():
        serializer.validated_data['teacher'] = teacher
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)