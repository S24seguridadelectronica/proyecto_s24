# Generated by Django 5.1 on 2024-08-18 07:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventario', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='camara',
            name='ubicacion',
            field=models.CharField(max_length=255),
        ),
    ]
