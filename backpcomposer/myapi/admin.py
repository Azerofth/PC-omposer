from django.contrib import admin
from .models import *
# Register your models here.

@admin.register(CPU)
class CPU(admin.ModelAdmin):
    list_display = ['cpu_name','cpu_brand', 'cpu_chipset', 'cpu_performance']

@admin.register(GPU)
class GPU(admin.ModelAdmin):
    list_display = ['gpu_name','gpu_brand', 'gpu_performance', 'gpu_model']

@admin.register(RAM)
class RAM(admin.ModelAdmin):
    list_display = ['ram_name', 'ram_brand', 'ram_type', 'ram_performance']
    
@admin.register(Storage)
class Storage(admin.ModelAdmin):
    list_display = ['storage_name','storage_brand', 'storage_capacity', 'storage_type']

@admin.register(PowerSupply)
class PowerSupply(admin.ModelAdmin):
    list_display = ['power_supply_name','power_supply_brand', 'power_supply_rating', 'power_supply_wattage']

@admin.register(Case)
class Case(admin.ModelAdmin):
    list_display = ['case_name','case_brand', 'case_size']

@admin.register(Motherboard)
class Motherboard(admin.ModelAdmin):
    list_display = ['motherboard_name','motherboard_brand','motherboard_size', 'motherboard_chipset']

@admin.register(Computer)
class Computer(admin.ModelAdmin):
    list_display = ['cpu_name','motherboard', 'ram', 'storage', 'gpu_name', 'power_supply', 'case', 'user', 'likes']

@admin.register(User)
class User(admin.ModelAdmin):
    list_display = ['username', 'email', 'password', 'phone_number', 'verification']
