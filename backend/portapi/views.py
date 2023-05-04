from django.http import JsonResponse
from .models import Languages, Project


def getCommands(request):
    endpoints={
        "api/project":"Return all projects",
        "api/languages":"Return all languages",

    } 

    return JsonResponse(endpoints)

def getProjects(request):
    projects=Project.objects.all()
    serialized_projects=[]
    for project in projects:
        serialized_projects.append(project.serializer())
    
    return JsonResponse(serialized_projects, safe=False)

def getLanguages(request):
    languages=Languages.objects.all()
    serialized_languages=[]
    for language in languages:
        serialized_languages.append(language.serializer())
    
    return JsonResponse(serialized_languages, safe=False)