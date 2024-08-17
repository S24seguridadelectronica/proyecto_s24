# proyecto_s24/urls.py

from django.contrib import admin
from django.urls import path, include
from inventario import views as inventario_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('inventario/', include('inventario.urls')),  # Incluye las URLs de la aplicación inventario
    path('', inventario_views.index, name='index'),  # Ruta para la vista index
]

