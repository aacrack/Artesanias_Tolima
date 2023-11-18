from rest_framework.serializers import ModelSerializer
from .models import Register_Productos

class productoserializer(ModelSerializer):
    class Meta:

        model= Register_Productos
        fields= '__all__'
        