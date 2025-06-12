from .models import TaskTable
from rest_framework import viewsets
from .serializer import TaskSerializer
from rest_framework.response import Response
from rest_framework.views import APIView

class TaskViewSet(APIView):
    def get_task(self, request):
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