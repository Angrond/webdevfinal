from django.db import models

class Languages(models.Model):
    name=models.CharField(max_length=200)

    def __str__(self):
        return self.name
    
    def serializer(self):
        return{"id":self.id, "name":self.name}

class Project(models.Model):
    name=models.CharField(max_length=200)
    desc=models.CharField(max_length=2000)
    languages=models.ManyToManyField(Languages)
    link=models.CharField(max_length=2000)

    def __str__(self):
        return self.name
    
    def serializer(self):
        serialized_languages=[]
        for language in self.languages.all():
            serialized_languages.append(language.serializer())

        return{
            "name":self.name, 
            "description":self.desc,
            "languages":serialized_languages,
            "link":self.link
            }