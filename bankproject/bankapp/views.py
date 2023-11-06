from django.shortcuts import render
from .models import wall, team


# Create your views here.
def index(request):
    obj = wall.objects.all()
    ob = team.objects.all()

    return render(request, 'index.html', {'res': obj, 'result': ob})
