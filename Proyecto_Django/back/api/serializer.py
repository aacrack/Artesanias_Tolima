from rest_framework.serializers import ModelSerializer
from .models import Register_Productos,imagenes,Register

class productoserializer(ModelSerializer):
    class Meta:

        model= Register_Productos
        fields= '__all__'

        
class imagenserializer(ModelSerializer):
    class Meta:

        model= imagenes
        fields= '__all__'
        
class Registerserializer(ModelSerializer):
    class Meta:

        model= Register
        fields= '__all__'
