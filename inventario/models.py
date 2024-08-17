from django.db import models

class Camara(models.Model):
    nombre = models.CharField(max_length=100)
    modelo = models.CharField(max_length=100)
    numero_serie = models.CharField(max_length=100, unique=True)
    ubicacion = models.CharField(max_length=100)
    fecha_instalacion = models.DateField()

    def __str__(self):
        return f"{self.nombre} - {self.modelo}"
