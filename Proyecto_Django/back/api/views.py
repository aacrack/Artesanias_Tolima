from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt    
import json
# from api.models import Register
# from api.models import Registro_Producto
from rest_framework.viewsets import ModelViewSet
from .serializer import productoserializer
from .models import Register_Productos




# Create your views here.
@csrf_exempt
def saludar(request):

    # # datos_persona=json.loads(request.body)

    # print(datos_persona[)
   

    
    return HttpResponse("Terminado")


# Register
@csrf_exempt
def registro(request):
    datos_registro=json.loads(request.body)
        
    # Register.objects.create (
    #     nombre_c=datos_registro["nombre_c"],
    #     correo_electronico=datos_registro["correo_electronico"],
    #     usuario=datos_registro["usuario"],
    #     password=datos_registro["password"], 
         
          
        

    #  )
    # return JsonResponse({"Mensaje": "Sus datos se han registrado correctamente"})

# def registro(request,id):
    
#      usuario=Register.objects.get(id = id)
#      usuario.delete()
#      usuario.nombre_c="Brayan"
#      usuario.correo_electronico="Brayan@gmail.com"
#      usuario.save()
#     Register.objects.create(
#         nombre_c = "santiago",
#         correo_electronico= "santiago@gmail.com",
#         usuario= "santiaghinho",
#         password="elel"

#     )

#      return HttpResponse("El id ingresado es :{}".format(id))
#      return HttpResponse(usuario.nombre_c)

    
# def traer_personas(request):
#     register = Register.objects.all()

#     lista_persona= []

#     for i in register:

#         lista_persona.append({

#             "id":i.id,
#             "nombre":i.nombre_c,


#         })


# @csrf_exempt
# def registro_p(request):
#     producto_registro=json.loads(request.body)
        
#     Registro_Producto.objects.create (
#         cantidad=producto_registro["cantidad"],
#         producto=producto_registro["producto"],
#         descripcion=producto_registro["descripcion"],
#         precio_inversion=producto_registro["precio_inversion"], 
#         precio_venta=producto_registro["precio_venta"]
        
          
        

#      )
#     return JsonResponse({"Mensaje": "Sus datos se han registrado correctamente"})





class productoViewset(ModelViewSet):

    queryset = Register_Productos.objects.all()
    serializer_class = productoserializer

    