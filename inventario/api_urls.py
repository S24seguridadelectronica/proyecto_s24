# inventario/api_urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CamaraViewSet

router = DefaultRouter()
router.register(r'camaras', CamaraViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
