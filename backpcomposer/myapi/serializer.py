from rest_framework import serializers
from myapi.models import *

class computerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Computer
        fields = ('id','cpu_name','motherboard','ram','main_storage',
                  'secondary_storage','gpu_name','power_supply','case')
        
class userSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=User
        fields=('id','username','password', 'email', 'phone_number','verfication')
        
class CPUSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=CPU
        fields=('id', 'cpu_brand', 'cpu_name','cpu_performance')

class GPUSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=GPU
        fields=('id', 'gpu_brand', 'gpu_name','gpu_performance')

class RAMSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=RAM
        fields=('id', 'ram_brand', 'ram_name','ram_performance')