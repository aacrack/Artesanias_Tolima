from django.db import models

# Create your models here.

#Register
class  Register(models.Model):
    nombre_c=models.CharField(max_length=50,null=False)
    correo_electronico=models.CharField(max_length=50,null=False)
    user=models.CharField(max_length=50,null=False)
    password=models.CharField(max_length=50,null=False)
    
  

# class persona(models.Models):

#     nombre=models.CharField(max_length=50,null=False)
#     apellido=models.CharField(max_length=50,null=False)
#     edad=models.IntegerField(null=False)
#     descripcion=models.TextField(null=False)
#     fecha_creacion=models.DateField(auto_now_add=True)

    
# class Registro_Producto(models.Model):
#     cantidad=models.CharField(max_length=50,null=False)
#     producto=models.CharField(max_length=50,null=False)
#     descripcion=models.CharField(max_length=100,null=False)
#     precio_inversion=models.IntegerField(null=False)
#     precio_venta=models.IntegerField(null=False)



class Register_Productos(models.Model):
    cantidad = models.IntegerField(null=False)
    producto = models.CharField(max_length=50,null=False)
    descripcion = models.CharField(max_length=1000,null=False)
    precio_inversion = models.IntegerField(null=False)
    precio_venta = models.IntegerField(null=False)
    img = models.ImageField(upload_to='animales/')
    img1 = models.ImageField(upload_to='animales/', default="animales/perro.png")
    img2 = models.ImageField(upload_to='animales/', default="animales/perro.png")
 


    # texto = "{1} ({0})" 
    # return texto.format(self.producto  , self.cantidad)



class imagenes(models.Model):
    quantity = models.IntegerField(null=False)
    product = models.CharField(max_length=50,null=False)
    description = models.CharField(max_length=100,null=False)
    price_inversion = models.IntegerField(null=False)
    price_venta = models.IntegerField(null=False)

    file = models.ImageField(upload_to='animales/')

  
