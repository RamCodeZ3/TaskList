from django.db import models

class TaskTable(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=500, blank=True)
    completed = models.BooleanField(default=False)
    starting_date = models.DateTimeField(auto_now_add=True)
    ending_date = models.DateField(null=True, blank=True)
    category = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return self.title