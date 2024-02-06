from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import CustomStudent

class StudentRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomStudent
        fields = ['email', 'username', 'password', 'profile_img']

    def create(self, validated_data):
        return CustomStudent.objects.create_user(**validated_data)

class StudentLoginSerializer(serializers.Serializer):
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
    
class StudentDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomStudent
        fields = ['id', 'email', 'username', 'profile_img']
