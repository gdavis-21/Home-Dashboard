from django.shortcuts import render
from .utility import fetchMonthlyConsumption, predictRemainderOfMonth, generateHistoricalData
from django.core import serializers
from django.http import HttpResponse
from datetime import date
import json
from .models import Utilities
from django.views.decorators.csrf import csrf_exempt
from decimal import Decimal


def base(request):
    return render(request, "HomeDashboard/base.html")

def home(request):
    return render(request, "HomeDashboard/home.html")

def analytics(request):
    try:
        Utilities.objects.get(date = date.today())
    except Utilities.DoesNotExist:
        today = date.today()
        generateHistoricalData(date(today.year,today.month,today.day), date(today.year, today.month, today.day))
    finally:
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

def march(request):
    data = fetchMonthlyConsumption(3, 2023)
    if request.method == "GET":
        data_list = serializers.serialize('json', data)
        return HttpResponse(data_list, content_type="text/json")

def april(request):
    data = fetchMonthlyConsumption(4, 2023)
    if request.method == "GET":
        data_list = serializers.serialize('json', data)
        return HttpResponse(data_list, content_type="text/json")

def may(request):
    data = fetchMonthlyConsumption(5, 2023)
    if request.method == "GET":
        data_list = serializers.serialize('json', data)
        return HttpResponse(data_list, content_type="text/json")

def june(request):
    data = fetchMonthlyConsumption(6, 2023)
    if request.method == "GET":
        data_list = serializers.serialize('json', data)
        return HttpResponse(data_list, content_type="text/json")

def july(request):
    data = fetchMonthlyConsumption(7, 2023)
    if request.method == "GET":
        data_list = serializers.serialize('json', data)
        return HttpResponse(data_list, content_type="text/json")

def august(request):
    data = fetchMonthlyConsumption(8, 2023)
    if request.method == "GET":
        data_list = serializers.serialize('json', data)
        return HttpResponse(data_list, content_type="text/json")

def september(request):
    data = fetchMonthlyConsumption(9, 2023)
    if request.method == "GET":
        data_list = serializers.serialize('json', data)
        return HttpResponse(data_list, content_type="text/json")
    
def october(request):
    data = fetchMonthlyConsumption(10, 2023)
    if request.method == "GET":
        data_list = serializers.serialize('json', data)
        return HttpResponse(data_list, content_type="text/json")

def november(request):
    data = fetchMonthlyConsumption(11, 2023)
    if request.method == "GET":
        data_list = serializers.serialize('json', data)
        return HttpResponse(data_list, content_type="text/json")

def december(request):
    data = fetchMonthlyConsumption(12, 2023)
    if request.method == "GET":
        data_list = serializers.serialize('json', data)
        return HttpResponse(data_list, content_type="text/json")

def predict(request):
    if request.method == "GET":
        data = predictRemainderOfMonth(date.today().month, date.today().day)
        return HttpResponse(json.dumps(data), content_type="text/json")

def predictMonth(request, month):
    if request.method == "GET":
        data = predictRemainderOfMonth(month, 1)
        return HttpResponse(json.dumps(data), content_type="text/json")

@csrf_exempt
def postNewValues(request):
    if request.method == "POST":
        cost = request.POST.get("cost")
        power = request.POST.get("power")
        water = request.POST.get("water")
        utilitiesToday = Utilities.objects.all().get(date=date.today())
        utilitiesToday.electricityCost += Decimal(cost)
        utilitiesToday.electricityUsed += Decimal(power)
        utilitiesToday.waterUsed += Decimal(water)
        utilitiesToday.save()
        return HttpResponse()


