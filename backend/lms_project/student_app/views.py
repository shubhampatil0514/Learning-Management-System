from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import login
from rest_framework_simplejwt.tokens import RefreshToken
from .models import CustomStudent
import base64
from .serializers import StudentRegistrationSerializer, StudentLoginSerializer, StudentDetailSerializer

@api_view(['POST'])
@permission_classes([AllowAny])
def student_register(request):
    if request.method == 'POST':
        serializer = StudentRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
def student_login(request):
    if request.method == 'POST':
        serializer = StudentLoginSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            user = serializer.validated_data['user']
            login(request, user)

            # Base64 encode student_id and student_email
            student_id_base64 = base64.b64encode(str(user.id).encode()).decode()
            student_email_base64 = base64.b64encode(user.email.encode()).decode()

            refresh = RefreshToken.for_user(user)
            payload = {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'student_id_base64': student_id_base64,
                'student_email_base64': student_email_base64,
            }

            return Response(payload, status=status.HTTP_200_OK)
        return Response({'detail': 'Invalid email or password.'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_student_details(request, student_id):
    try:
        student = CustomStudent.objects.get(id=student_id)
    except CustomStudent.DoesNotExist:
        return Response({'detail': 'Student not found'}, status=status.HTTP_404_NOT_FOUND)

    serializer = StudentDetailSerializer(student)
    return Response(serializer.data)
