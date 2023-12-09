from rest_framework.routers import DefaultRouter
from .views import productoViewset,imagenViewset

router = DefaultRouter()

router.register(prefix="Register_productos", basename="Producto", viewset=productoViewset)
router.register(prefix="Register_imagen", basename="Register_imagen", viewset=imagenViewset)
