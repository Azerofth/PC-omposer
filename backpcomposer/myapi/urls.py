from django.urls import include, path
from rest_framework import routers
from . import views
from django.views.decorators.csrf import csrf_exempt


router = routers.DefaultRouter()
router.register(r'user', views.userViewset)
router.register(r'cpu', views.cpuViewset)
router.register(r'ram', views.ramViewset)
router.register(r'motherboard', views.motherboardViewset)
router.register(r'storage', views.storageViewset)
router.register(r'gpu', views.gpuViewset)
router.register(r'powersupply', views.powerSupplyViewset)
router.register(r'case', views.caseViewset)
router.register(r'computer', views.computerViewset)
# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('login/', views.login_view, name='login'),
    path('register/', views.register_view, name='register'),
    path('logout/', views.logout_view, name='logout'),
]