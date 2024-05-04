from django.urls import path
from .views import SubjectListCreateView, QuestionCreateView, QuestionListView, QuizAnswerSubmitView

urlpatterns = [
    path('subjects', SubjectListCreateView.as_view(), name='subject-list-create'),
    path('create', QuestionCreateView.as_view(), name='question-create'),
    path('questions/<int:subject_id>', QuestionListView.as_view(), name='question-create'),
    path('submit', QuizAnswerSubmitView.as_view(), name='quiz-answer-submit'),
]