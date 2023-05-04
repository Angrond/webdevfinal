from django.urls import path, include
from .views import getCommands, getProjects, getLanguages

urlpatterns=[
    path('', getCommands),
    path('projects/', getProjects),
    path('languages/', getLanguages),
]