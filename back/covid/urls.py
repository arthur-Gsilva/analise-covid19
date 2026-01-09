from django.urls import path
from .views import CovidView, BrasilEstadosView

urlpatterns = [
    path("covid/", CovidView.as_view()),
    path('covid/brasil/estados/', BrasilEstadosView.as_view()),
]