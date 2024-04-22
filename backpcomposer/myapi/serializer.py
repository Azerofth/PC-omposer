from rest_framework import serializers
from myapi.models import *
   
class userSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=User
        fields=('username','password', 'email', 'phone_number')
        
class CPUSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=CPU
        fields=('cpu_name','cpu_brand', 'cpu_chipset','cpu_performance')

class GPUSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=GPU
        fields=( 'gpu_name','gpu_brand', 'gpu_performance', 'gpu_model')

class RAMSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=RAM
        fields=( 'ram_name','ram_brand','ram_performance')
    
class MotherboardSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Motherboard
        fields=( 'motherboard_name','motherboard_brand','motherboard_size', 'motherboard_chipset')

class StorageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Storage
        fields=('storage_name','storage_brand','storage_capacity', 'storage_type')

class Power_SupplySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=PowerSupply
        fields=('power_supply_name','power_supply_brand','power_supply_rating','power_supply_wattage')

class CaseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Case
        fields=('case_name','case_brand', 'case_size')

class ComputerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Computer
        fields = ('cpu_name','motherboard','ram','storage'
                  ,'gpu_name','power_supply','case', 'user', 'likes')
