from django.urls import path, include
from .views import getCommands, getProjects

urlpatterns=[
    path('', getCommands),
    path('projects/', getProjects),
]