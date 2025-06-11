from django import forms
from .models import TaskTable

class TaskForm(forms.ModelForm):
    class Meta:
        model = TaskTable
        fields = ['title', 'description', 'starting_date', 'ending_date', 'category']
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control'}),
            'description': forms.Textarea(attrs={'class': 'form-control'}),
            'starting_date': forms.DateInput(attrs={'class': 'form-control', 'type': 'date'}),
            'ending_date': forms.DateInput(attrs={'class': 'form-control', 'type': 'date'}),
            'category': forms.TextInput(attrs={'class': 'form-control'}),
        }