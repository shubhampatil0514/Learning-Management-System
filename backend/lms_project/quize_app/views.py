from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Subject, Question
from .serializers import SubjectSerializer, QuestionSerializer, QuestionListSerializer, AnswerSubmitSerializer

class SubjectListCreateView(generics.ListCreateAPIView):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer

class QuestionCreateView(generics.CreateAPIView):
    serializer_class = QuestionSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class QuestionListView(generics.ListAPIView):
    serializer_class = QuestionListSerializer  

    def get_queryset(self):
        subject_id = self.kwargs['subject_id']
        return Question.objects.filter(subject__id=subject_id)
    
class QuizAnswerSubmitView(APIView):
    def post(self, request, *args, **kwargs):
        subject_id = request.data.get('subject_id')
        answers = request.data.get('answers', {})
        questions = Question.objects.filter(subject_id=subject_id)

        correct_count = 0
        total_questions = questions.count()

        for question in questions:
            question_id = str(question.id)
            if answers.get(question_id) == str(question.answer):
                correct_count += 1
                
        if total_questions > 0:
            score = (correct_count / total_questions) * 100
        else:
            score = 0
        response_data = {
            'message': f"You scored {score}% in the quiz!",
            'score': score,
        }

        return Response(response_data, status=status.HTTP_200_OK)
    
    

