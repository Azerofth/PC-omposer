from django.urls import include, path
from rest_framework import routers
from . import views
from django.views.decorators.csrf import csrf_exempt


router = routers.DefaultRouter()
router.register(r'user', views.userViewset)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('login/', views.login_view, name='login'),
    path('register/', views.register_view, name='register'),
]