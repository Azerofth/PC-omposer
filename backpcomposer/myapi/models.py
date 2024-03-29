from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=60)
    password = models.CharField(max_length=60)
    email = models.CharField(max_length=60)
    phone_number = models.CharField(max_length=60)
    verification = models.BooleanField()

class CPU(models.Model):
    cpu_brand = models.CharField(max_length=60)
    cpu_name = models.CharField(max_length=60)
    cpu_performance= models.CharField(max_length=60)

class GPU(models.Model):
    gpu_brand = models.CharField(max_length=60)
    gpu_name = models.CharField(max_length=60)
    gpu_performance= models.CharField(max_length=60)

class RAM(models.Model):
    ram_brand = models.CharField(max_length=60)
    ram_name = models.CharField(max_length=60)
    ram_performance= models.CharField(max_length=60)

class Computer(models.Model):
    cpu_name = models.ForeignKey(CPU, on_delete=models.CASCADE)
    motherboard=models.CharField(max_length=60)
    ram=models.ForeignKey(RAM, on_delete=models.CASCADE)
    main_storage= models.CharField(max_length=60)
    secondary_storage= models.CharField(max_length=60)
    gpu_name= models.ForeignKey(GPU, on_delete=models.CASCADE)
    power_supply=models.CharField(max_length=60)
    case=models.CharField(max_length=60)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


