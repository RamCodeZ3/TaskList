from .models import TaskTable
from rest_framework import serializers   


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskTable
        fields = '__all__'
        read_only_fields = ['id', 'title', 'description' 'completed', 'starting_date', 'ending_date', 'category',]