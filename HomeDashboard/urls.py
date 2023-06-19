from django.urls import path
from . import views

urlpatterns = [
    path("", views.base, name="base"),
    path("home/", views.home, name="home"),
    path("analytics/", views.analytics, name="analytics"),
    path("settings/", views.settings, name="settings"),
]