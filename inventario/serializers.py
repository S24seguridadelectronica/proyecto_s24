from rest_framework import serializers
from .models import Camara

class CamaraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Camara
        fields = '__all__'  # Esto incluirá todos los campos del modelo
