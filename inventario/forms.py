from django import forms
from .models import Camara

class CamaraForm(forms.ModelForm):
    class Meta:
        model = Camara
        fields = ['nombre', 'modelo', 'numero_serie', 'ubicacion', 'fecha_instalacion']
