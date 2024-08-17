# inventario/views.py

from django.shortcuts import render, get_object_or_404, redirect
from .models import Camara
from .forms import CamaraForm  # Asegúrate de tener un formulario definido

def lista_camaras(request):
    # Lógica para listar cámaras
    camaras = Camara.objects.all()  # Obtener todas las cámaras
    return render(request, 'inventario/lista_camaras.html', {'camaras': camaras})

def crear_camara(request):
    if request.method == 'POST':
        form = CamaraForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('lista_camaras')
    else:
        form = CamaraForm()
    return render(request, 'inventario/crear_camara.html', {'form': form})

def eliminar_camara(request, pk):
    camara = get_object_or_404(Camara, pk=pk)
    if request.method == 'POST':
        camara.delete()
        return redirect('lista_camaras')
    return render(request, 'inventario/eliminar_camara.html', {'camara': camara})

def index(request):
    # Lógica para la vista index
    return render(request, 'inventario/index.html')
