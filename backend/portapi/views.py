from django.http import JsonResponse


def getCommands(request):
    endpoints={
        "api/project":"Return all projects"
    } 

    return JsonResponse(endpoints)