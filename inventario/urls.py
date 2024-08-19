# inventario/urls.py

from django.urls import path, include
from . import views
from .api_urls import urlpatterns as api_urlpatterns

# Incluir las rutas del DefaultRouter para la API REST
urlpatterns = [
    # Rutas para la interfaz web
    path('', views.index, name='index'),  # Página principal
    path('camaras/', views.lista_camaras, name='lista_camaras'),  # Lista de cámaras
    path('crear/', views.crear_camara, name='crear_camara'),  # Crear una nueva cámara
    path('crear/<int:pk>/', views.crear_camara, name='actualizar_camara'),  # Actualizar una cámara existente
    path('eliminar/<int:pk>/', views.eliminar_camara_api, name='eliminar_camara'),  # Eliminar una cámara

    # Rutas para la API
    path('api/camaras/', views.lista_camaras_api, name='lista_camaras_api'),  # API para lista de cámaras
    path('api/camara/<int:pk>/', views.detalle_camara_api, name='detalle_camara_api'),  # API para detalle de cámara
    
    # Incluir las URLs de la API (asegúrate de que api_urls.py esté correctamente configurado)
    path('api/inventario/', include(api_urlpatterns)),  # Incluir las URLs de la API bajo /api/inventario/
]

