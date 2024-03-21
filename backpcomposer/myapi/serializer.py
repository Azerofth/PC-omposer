from rest_framework import serializers
from myapi.models import *

class cameraSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Computer
        fields = ('id','cpu_name','motherboard','ram','main_storage',
                  'secondary_storage','gpu_name','power_supply','case')
        
