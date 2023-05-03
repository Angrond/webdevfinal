from django.urls import path, include
from .views import getCommands

urlpatterns=[
    path('', getCommands)
]