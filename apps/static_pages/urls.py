from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.HomeView.as_view(), name="home"),
    path('404', views.error404View),
    path('500', views.error500View),
]