from rest_framework.routers import DefaultRouter
from .views import productoViewset,imagenViewset,RegisterViewset

router = DefaultRouter()

router.register(prefix="Register_productos", basename="Producto", viewset=productoViewset)
router.register(prefix="Register_imagen", basename="Register_imagen", viewset=imagenViewset)
router.register(prefix="Register_user", basename="Register_user", viewset=RegisterViewset)
