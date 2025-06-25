from .models import TaskTable
from rest_framework import viewsets
from .serializer import TaskSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404

class TaskViewSet(APIView):
    def get(self, request):
        queryset = TaskTable.objects.all()
        serializer = TaskSerializer(queryset, many=True)
        
        if serializer is not None:
            return Response(serializer.data, status=200)
        return Response({"error": "No tasks found"}, status=404)
    
class TaskCreateView(APIView):
    def post(self, request):
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    
class TaskDeleteView(APIView):
    def delete(self,request,id):
        try:
            task = TaskTable.objects.get(pk=id)
            task.delete()
            task.save()
            return Response({"message": "Task deleted successfully"}, status=204)
        except TaskTable.DoesNotExist:
            return Response({"error": "Task not found"}, status=404)

class TaskUpdateView(APIView):
    def put(self,request,id):
            
        task = get_object_or_404(TaskTable, pk=id)
        serializer = TaskSerializer(task, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
