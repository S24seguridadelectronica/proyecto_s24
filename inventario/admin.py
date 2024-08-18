from django.contrib import admin
from .models import Camara  # Reemplaza 'Camara' con el nombre de tu modelo

@admin.register(Camara)
class CamaraAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'modelo', 'numero_serie', 'ubicacion', 'fecha_instalacion')
