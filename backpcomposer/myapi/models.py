from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=60)
    password = models.CharField(max_length=60)
    email = models.CharField(max_length=60)
    phone_number = models.CharField(max_length=60)
    verification = models.BooleanField()
    def __str__(self):
        return self.username
    
class CPU(models.Model):
    cpu_brand = models.CharField(max_length=60)
    cpu_name = models.CharField(max_length=60)
    cpu_chipset = models.CharField(max_length=60)
    cpu_performance= models.CharField(max_length=60)
    def __str__(self):
        return self.cpu_name

class GPU(models.Model):
    gpu_brand = models.CharField(max_length=60)
    gpu_name = models.CharField(max_length=60)
    gpu_performance= models.CharField(max_length=60)
    def __str__(self):
        return self.gpu_name

class RAM(models.Model):
    ram_brand = models.CharField(max_length=60)
    ram_name = models.CharField(max_length=60)
    ram_type = models.CharField(max_length=60)
    ram_performance= models.CharField(max_length=60)
    def __str__(self):
        return self.ram_name

class Storage(models.Model):
    storage_brand = models.CharField(max_length=60)
    storage_name = models.CharField(max_length=60)
    storage_capacity = models.CharField(max_length=60)
    storage_type = models.CharField(max_length=60)
    def __str__(self):
        return self.storage_name

class PowerSupply(models.Model):
    power_supply_brand = models.CharField(max_length=60)
    power_supply_name = models.CharField(max_length=60)
    power_supply_rating = models.CharField(max_length=60)
    power_supply_wattage = models.CharField(max_length=60)
    def __str__(self):
        return self.power_supply_name

class Case(models.Model):
    case_brand = models.CharField(max_length=60)
    case_name = models.CharField(max_length=60)
    case_size = models.CharField(max_length=60)
    def __str__(self):
        return self.case_name

class Motherboard(models.Model):
    motherboard_brand = models.CharField(max_length=60)
    motherboard_name = models.CharField(max_length=60)
    motherboard_size = models.CharField(max_length=60)
    motherboard_chipset = models.CharField(max_length=60)
    def __str__(self):
        return self.motherboard_name

class Computer(models.Model):
    cpu_name = models.ForeignKey(CPU, on_delete=models.CASCADE)
    motherboard = models.ForeignKey(Motherboard, on_delete=models.CASCADE)
    ram = models.ForeignKey(RAM, on_delete=models.CASCADE)
    storage = models.ForeignKey(Storage, on_delete=models.CASCADE)
    gpu_name = models.ForeignKey(GPU, on_delete=models.CASCADE)
    power_supply = models.ForeignKey(PowerSupply, on_delete=models.CASCADE)
    case = models.ForeignKey(Case, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


