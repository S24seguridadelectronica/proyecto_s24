# inventario/api_urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CamaraViewSet

router = DefaultRouter()
router.register(r'camaras', CamaraViewSet)


camara_list = CamaraViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

camara_detail = CamaraViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'delete': 'destroy'
})

urlpatterns = [
    path('', include(router.urls)),
    path('camaras/', camara_list, name='camara-list'),
    path('camaras/<int:pk>/', camara_detail, name='camara-detail'),
]
