from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import CustomTeacher, Lecture


class TeacherRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomTeacher
        fields = ['id', 'email', 'username', 'profile_img', 'is_active', 'is_staff', 'is_teacher']

    def create(self, validated_data):
        return CustomTeacher.objects.create_user(**validated_data)

class TeacherLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        if email and password:
            user = authenticate(request=self.context.get('request'), email=email, password=password)

            if user:
                data['user'] = user
            else:
                raise serializers.ValidationError('Invalid email or password.')
        else:
            raise serializers.ValidationError('Email and password are required.')

        return data

class TeachertDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomTeacher
        fields = ['id', 'email', 'username', 'profile_img']

class LectureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lecture
        fields = [  'title', 'description', 'date', 'time']
