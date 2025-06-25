from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('getTask/', views.TaskViewSet.as_view(), name='get-tasks'),
    path('createTask/', views.TaskCreateView.as_view(), name='create-task'),
    path('deleteTask/<int:id>', views.TaskDeleteView.as_view(), name='delete-task'),  # Include the tasks app URLs
]