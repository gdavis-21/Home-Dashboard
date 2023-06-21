from django.shortcuts import render
from .utility import fetchMonthlyConsumption
from django.core import serializers
from django.http import HttpResponse


def base(request):
    return render(request, "HomeDashboard/base.html")

def home(request):
    return render(request, "HomeDashboard/home.html")

def analytics(request):
    return render(request, "HomeDashboard/analytics.html")

def settings(request):
    return render(request, "HomeDashboard/settings.html")

def january(request):
    data = fetchMonthlyConsumption(1, 2023)
    if request.method == "GET":
        data_list = serializers.serialize('json', data)
        return HttpResponse(data_list, content_type="text/json")

def february(request):
    data = fetchMonthlyConsumption(2, 2023)
    if request.method == "GET":
        data_list = serializers.serialize('json', data)
        return HttpResponse(data_list, content_type="text/json")