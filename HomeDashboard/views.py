from django.shortcuts import render


def base(request):
    return render(request, "HomeDashboard/base.html")

def home(request):
    return render(request, "HomeDashboard/home.html")