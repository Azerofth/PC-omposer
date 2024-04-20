import json
from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from .models import *
from django.contrib.auth.models import User as ActUser
from .serializer import *
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        print(data)
        username = data.get('username')
        password = data.get('password')
        print(f"Username: {username}")
        print(f"Password: {password}")
        if username is not None and password is not None:
            user =authenticate(request, username=username, password=password)
            print(user)
            if user is not None:
                login(request, user)
                print(f"Welcome, {username}")
                token = request.session.get('token','loggedin')
                print(f"Token: {token}")
                response = JsonResponse({'token': token})
                return response
                
            else:
                print("Invalid username or password")
                return JsonResponse({'status': 'failed', 'reason': 'Invalid username or password'}, status=401)
        else:
            return JsonResponse({'status': 'failed', 'reason': 'Username or password not provided'}, status=400)
    else:
        return JsonResponse({'status': 'failed', 'reason': 'Invalid method'}, status=405)

class userViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = userSerializer

    #to check if user has an account
    @action(detail=False, methods=['post'])
    def duplicates(self, request, *args, **kwargs):
        received_data = json.loads(request.body.decode('utf-8'))
        print(received_data)
        user_count = self.queryset.filter(
            email=received_data['email']).count()
        print(user_count)
        if user_count > 0:
            return Response('no')
        else:
            return Response('ok')

@csrf_exempt
def register_view(request):
    if request.method =='POST':
        data = json.loads(request.body.decode('utf-8'))
        print(data)
        username= data.get('username')
        password = data.get('password')
        email = data.get('email')
        phone_number = data.get('phone_number')
        verification = data.get('verification')
        print(f"Username: {username}")
        print(f"Password: {password}")
        print(f"Email: {email}")
        print(f"Phone Number: {phone_number}")
        print(f'Verification: {verification}')
        if email is not None and password is not None:
            print(f"Welcome, {username}")
            if username and password and email:
                # Create a new user object
                new_user1 = ActUser.objects.create_user(
                    username=username,
                    email=email,
                    password=password,  # You should hash the password before saving it to the database
                )
                new_user2 = User.objects.create(
                    username=username,
                    email=email,
                    password=password,  # You should hash the password before saving it to the database
                    phone_number=phone_number,
                    verification=verification
                )
                # Save the user object to the database
                new_user1.save()
                new_user2.save()
            return JsonResponse({'status': 'ok'})
        else:
            print("Invalid username or password")
            return JsonResponse({'status': 'failed', 'reason': 'Invalid username or password'}, status=401)
    else:
        return JsonResponse({'status': 'failed', 'reason': 'Invalid method'}, status=405)
    
@csrf_exempt
def logout_view(request):
    if request.method =='POST':
        logout(request)
        return JsonResponse({'status': 'ok'})
    else:
        print("Logout failed")
        return JsonResponse({'status': 'failed', 'reason': 'Invalid username or password'}, status=401)


class cpuViewset(viewsets.ModelViewSet):
    queryset = CPU.objects.all()
    serializer_class = CPUSerializer

class gpuViewset(viewsets.ModelViewSet):
    queryset = GPU.objects.all()
    serializer_class = GPUSerializer

class ramViewset(viewsets.ModelViewSet):
    queryset = RAM.objects.all()
    serializer_class = RAMSerializer

class motherboardViewset(viewsets.ModelViewSet):
    queryset = Motherboard.objects.all()
    serializer_class = MotherboardSerializer

class caseViewset(viewsets.ModelViewSet):
    queryset = Case.objects.all()
    serializer_class = CaseSerializer

class computerViewset(viewsets.ModelViewSet):
    queryset = Computer.objects.all()
    serializer_class = ComputerSerializer

class storageViewset(viewsets.ModelViewSet):
    queryset = Storage.objects.all()
    serializer_class = StorageSerializer

class powerSupplyViewset(viewsets.ModelViewSet):
    queryset = PowerSupply.objects.all()
    serializer_class = Power_SupplySerializer


