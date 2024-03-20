from django.db import models

# Create your models here.
class Computer(models.Model):
    cpu_name = models.CharField(max_length=60)
    motherboard=models.CharField(max_length=60)
    ram=models.Charfield(max_length=60)
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