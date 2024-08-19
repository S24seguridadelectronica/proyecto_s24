from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render, get_object_or_404, redirect
from .models import Camara
from .forms import CamaraForm
from .serializers import CamaraSerializer
from rest_framework import viewsets

class CamaraViewSet(viewsets.ModelViewSet):
    queryset = Camara.objects.all()
    serializer_class = CamaraSerializer

# Vista para la página principal
def index(request):
    return render(request, 'index.html')

# Vista API para listar y crear cámaras
@api_view(['GET', 'POST'])
def lista_camaras_api(request):
    if request.method == 'GET':
        camaras = Camara.objects.all()
        serializer = CamaraSerializer(camaras, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CamaraSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Vista API para eliminar una cámara
@api_view(['DELETE'])
def eliminar_camara_api(request, pk):
    camara = get_object_or_404(Camara, pk=pk)
    if request.method == 'DELETE':
        camara.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Vista para crear una cámara (interfaz web)
def crear_camara(request):
    if request.method == 'POST':
        form = CamaraForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('lista_camaras')
    else:
        form = CamaraForm()
    return render(request, 'crear_camara.html', {'form': form})

# Vista para listar cámaras (interfaz web)
def lista_camaras(request):
    camaras = Camara.objects.all()
    return render(request, 'lista_camaras.html', {'camaras': camaras})

@api_view(['GET'])
def detalle_camara_api(request, pk):
    camara = get_object_or_404(Camara, pk=pk)
    serializer = CamaraSerializer(camara)
    return Response(serializer.data)
