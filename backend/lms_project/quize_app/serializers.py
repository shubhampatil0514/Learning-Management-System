from rest_framework import serializers
from .models import Subject, Question

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ['id', 'subject_name']

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['id', 'subject', 'question', 'answer', 'option_one', 'option_two', 'option_three', 'option_four']
        
class QuestionListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['id', 'subject', 'question', 'option_one', 'option_two', 'option_three', 'option_four']

class AnswerSubmitSerializer(serializers.Serializer):
    subject_id = serializers.IntegerField()
    answers = serializers.DictField(child=serializers.IntegerField())