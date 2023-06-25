from django.urls import path
from . import views

urlpatterns = [
    path("", views.base, name="base"),
    path("home/", views.home, name="home"),
    path("analytics/", views.analytics, name="analytics"),
    path("settings/", views.settings, name="settings"),
    path("january/", views.january, name="january"),
    path("february/", views.february, name="february"),
    path("march/", views.march, name="march"),
    path("april/", views.april, name="april"),
    path("may/", views.may, name="may"),
    path("june/", views.june, name="june"),
    path("july/", views.july, name="july"),
    path("august/", views.august, name="august"),
    path("september/", views.september, name="september"),
    path("october/", views.october, name="october"),
    path("november/", views.november, name="november"),
    path("december/", views.december, name="december"),
    path("predict/", views.predict, name="predict"),
    path("predictMonth/<int:month>/", views.predictMonth, name="predictMonth"),
    path("postNewValues/", views.postNewValues, name="postNewValues")
]