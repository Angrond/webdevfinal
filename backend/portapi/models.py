from django.db import models

class Languages(models.Model):
    name=models.CharField(max_length=200)

    def __str__(self):
        return self.name

class Project(models.Model):
    name=models.CharField(max_length=200)
    desc=models.CharField(max_length=2000)
    languages=models.ManyToManyField(Languages)
    link=models.CharField(max_length=2000)
    
    def __str__(self):
        return self.name