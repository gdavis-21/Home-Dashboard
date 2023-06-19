from django.shortcuts import render


def base(request):
    return render(request, "HomeDashboard/base.html")

def home(request):
    return render(request, "HomeDashboard/home.html")

def analytics(request):
    return render(request, "HomeDashboard/analytics.html")

def settings(request):
    return render(request, "HomeDashboard/settings.html")