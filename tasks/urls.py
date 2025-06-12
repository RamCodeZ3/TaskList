from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('getTask/', views.TaskViewSet.as_view(), name='get-tasks'),
    path('createTask/', views.TaskCreateView.as_view(), name='create-task'), # Include the tasks app URLs
]