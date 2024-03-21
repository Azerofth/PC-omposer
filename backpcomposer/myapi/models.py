from django.db import models

# Create your models here.
class Computer(models.Model):
    computer_id = models.IntegerField()
    cpu_name = models.CharField(max_length=60)
    motherboard=models.CharField(max_length=60)
    ram=models.CharField(max_length=60)
    main_storage= models.CharField(max_length=60)
    secondary_storage= models.CharField(max_length=60)
    gpu_name= models.CharField(max_length=60)
    power_supply=models.CharField(max_length=60)
    case=models.CharField(max_length=60)

class User(models.Model):
    username = models.CharField(max_length=60)
    password = models.CharField(max_length=60)
    email = models.CharField(max_length=60)
    phone_number = models.CharField(max_length=60)

class CPU(models.Model):
    cpu_id = models.CharField(max_length=60)
    cpu_brand = models.CharField(max_length=60)
    cpu_name = models.CharField(max_length=60)
    cpu_rank = models.CharField(max_length=60)
    cpu_performance= models.CharField(max_length=60)

class GPU(models.Model):
    gpu_id = models.CharField(max_length=60)
    gpu_brand = models.CharField(max_length=60)
    gpu_name = models.CharField(max_length=60)
    gpu_rank = models.CharField(max_length=60)
    gpu_performance= models.CharField(max_length=60)

class RAM(models.Model):
    ram_id = models.CharField(max_length=60)
    ram_brand = models.CharField(max_length=60)
    ram_name = models.CharField(max_length=60)
    ram_rank = models.CharField(max_length=60)
    ram_performance= models.CharField(max_length=60)
