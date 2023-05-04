from django.http import JsonResponse
from .models import Languages, Project


def getCommands(request):
    endpoints={
        "api/project":"Return all projects"
    } 

    return JsonResponse(endpoints)

def getProjects(request):
    projects=Project.objects.all()
    serialized_projects=[]
    for project in projects:
        serialized_projects.append(project.serializer())
    
    return JsonResponse(serialized_projects, safe=False)