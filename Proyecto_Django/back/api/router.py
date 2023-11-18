from rest_framework.routers import DefaultRouter
from .views import productoViewset

router = DefaultRouter()

router.register(prefix="Register_productos", basename="Producto", viewset=productoViewset)
