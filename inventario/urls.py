# inventario/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.lista_camaras, name='lista_camaras'),
    path('crear/', views.crear_camara, name='crear_camara'),
    path('crear/<int:pk>/', views.crear_camara, name='actualizar_camara'),
    path('eliminar/<int:pk>/', views.eliminar_camara, name='eliminar_camara'),
]
