from django.db import models


# Create your models here.
class wall(models.Model):
    name = models.CharField(max_length=250)
    Dis = models.TextField()
    image = models.ImageField(upload_to='img')

    def __str__(self):
        return self.name


class team(models.Model):
    heading = models.CharField(max_length=250)
    image = models.ImageField(upload_to='pic')
    dis = models.TextField()

    def __str__(self):
        return self.heading

