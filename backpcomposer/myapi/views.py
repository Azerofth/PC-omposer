import json
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from .models import *
from django.contrib.auth.models import User as ActUser
from .serializer import *
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import ObjectDoesNotExist
# Create your views here.

@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        username = data.get('username')
        password = data.get('password')
        if username is not None and password is not None:
            user =authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                token = request.session.get('token', (user.id-1)) #-1 was used because admin is taking up space 1
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
        user_count = self.queryset.filter(
            email=received_data['email']).count()
        if user_count > 0:
            return Response('no')
        else:
            return Response('ok')
        
    @action(detail=False, methods=['post'])
    def updateUser(self, request, *args, **kwargs):
        try:
            received_data = json.loads(request.body.decode('utf-8'))
            user = ActUser.objects.get(id=received_data.get('id'))
            user.username = received_data.get('username')
            user.email = received_data.get('email')
            user.set_password(received_data.get('password'))
            user.save()
            return JsonResponse({'status': 'ok'}, status=200)
        except ObjectDoesNotExist:
            return JsonResponse({'status': 'failed', 'reason': 'User does not exist.'}, status=404)
        except KeyError as e:
            return JsonResponse({'status': 'failed', 'reason': f'Missing key: {str(e)}'}, status=400)
        except Exception as e:
            return JsonResponse({'status': 'failed', 'reason': str(e)}, status=500)
        
    @action(detail=False, methods=['post'])
    def getUserData(self, request, *args, **kwargs):
        try:
            received_data = json.loads(request.body.decode('utf-8'))
            user = User.objects.get(user_id=received_data)
            user_data = {
                'user_id': user.user_id,
                'username': user.username,
                'email': user.email,
                'password': user.password
            }
            return JsonResponse(user_data)
        except ObjectDoesNotExist:
            return JsonResponse({'status': 'failed', 'reason': 'User does not exist.'}, status=404)
        except KeyError as e:
            return JsonResponse({'status': 'failed', 'reason': f'Missing key: {str(e)}'}, status=400)
        except Exception as e:
            return JsonResponse({'status': 'failed', 'reason': str(e)}, status=500)

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

    def getCPU(self, request, *args, **kwargs):
        cpuList = self.queryset.values()
        for cpu in cpuList:
            cpu = str(CPU.objects.get(['cpu_name_id']))
            print(cpu)


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

class storageViewset(viewsets.ModelViewSet):
    queryset = Storage.objects.all()
    serializer_class = StorageSerializer

class powerSupplyViewset(viewsets.ModelViewSet):
    queryset = PowerSupply.objects.all()
    serializer_class = Power_SupplySerializer

class computerViewset(viewsets.ModelViewSet):
    queryset = Computer.objects.all()
    serializer_class = ComputerSerializer
    
    @action(detail=False, methods=['post'])
    def getcomputer(self, request, *args, **kwargs):
        data = json.loads(request.body.decode('utf-8'))
        filter1 = self.queryset.filter(id=data)
        querylist = filter1.values()
        computer_data = []
        try:
            for test in querylist:
                cpu = str(CPU.objects.get(pk=test['cpu_name_id']))
                cpu_spec = str(CPU.objects.get(pk=test['cpu_name_id']).cpu_performance)
                motherboard = str(Motherboard.objects.get(pk=test['motherboard_id']))
                motherboard_spec = str(Motherboard.objects.get(pk=test['motherboard_id']).motherboard_chipset)
                ram = str(RAM.objects.get(pk=test['ram_id']))
                ram_spec = str(RAM.objects.get(pk=test['ram_id']).ram_performance)
                storage = str(Storage.objects.get(pk=test['storage_id']))
                storage_spec = str(Storage.objects.get(pk=test['storage_id']).storage_capacity)
                gpu = str(GPU.objects.get(pk=test['gpu_name_id']))
                gpu_spec = str(GPU.objects.get(pk=test['gpu_name_id']).gpu_performance)
                power_supply = str(PowerSupply.objects.get(pk=test['power_supply_id']))
                power_supply_spec = str(PowerSupply.objects.get(pk=test['power_supply_id']).power_supply_wattage)
                case = str(Case.objects.get(pk=test['case_id']))
                case_spec = str(Case.objects.get(pk=test['case_id']).case_size)
                computer_data.append({
                    'cpu_name': cpu,
                    'cpu_spec': cpu_spec,
                    'motherboard': motherboard,
                    'motherboard_spec': motherboard_spec,
                    'ram': ram,
                    'ram_spec': ram_spec,
                    'storage': storage,
                    'storage_spec': storage_spec,
                    'gpu_name': gpu,
                    'gpu_spec': gpu_spec,
                    'power_supply': power_supply,
                    'power_supply_spec': power_supply_spec,
                    'case': case,
                    'case_spec': case_spec
                })
                return Response(computer_data)
        except:
            return Response('No data found')
        
    @action(detail=False, methods=['post'])
    def uploadComputer(self, request):
        data = json.loads(request.body.decode('utf-8'))
        cpu = data.get('cpuID')
        cpu_obj = CPU.objects.get(cpu_name=cpu)
        motherboard = data.get('motherboardID')
        mbo_obj = Motherboard.objects.get(motherboard_name=motherboard)
        ram = data.get('ramID')
        ram_obj = RAM.objects.get(ram_name=ram)
        storage = data.get('storageID')
        storage_obj = Storage.objects.get(storage_name=storage)
        gpu = data.get('gpuID')
        gpu_obj = GPU.objects.get(gpu_name=gpu)
        psu = data.get('psuID')
        psu_obj = PowerSupply.objects.get(power_supply_name=psu)
        case = data.get('caseID')
        case_obj = Case.objects.get(case_name=case)
        user = data.get('userID')
        user_obj = User.objects.get(user_id=user)
        if cpu and motherboard and ram and storage and gpu and psu and case:
            new_computer = Computer.objects.create(
                cpu_name= cpu_obj,
                motherboard= mbo_obj,
                ram= ram_obj,
                storage= storage_obj,
                gpu_name= gpu_obj,
                power_supply= psu_obj,
                case= case_obj,
                user= user_obj,
            )
            new_computer.save()
            return JsonResponse({'status': 'ok'})
        else:
            return JsonResponse({'status': 'failed', 'reason': 'Invalid data'}, status=401)
        
    @action(detail=False, methods=['post'])
    def getUserComputers(self,request):
        data = json.loads(request.body.decode('utf-8'))
        filter1 = self.queryset.filter(user_id=data)
        querylist = filter1.values()
        print(querylist)
        computer_data = []
        try:
            for test in querylist:
                cpu = str(CPU.objects.get(pk=test['cpu_name_id']))
                cpu_spec = str(CPU.objects.get(pk=test['cpu_name_id']).cpu_performance)
                motherboard = str(Motherboard.objects.get(pk=test['motherboard_id']))
                motherboard_spec = str(Motherboard.objects.get(pk=test['motherboard_id']).motherboard_chipset)
                ram = str(RAM.objects.get(pk=test['ram_id']))
                ram_spec = str(RAM.objects.get(pk=test['ram_id']).ram_performance)
                storage = str(Storage.objects.get(pk=test['storage_id']))
                storage_spec = str(Storage.objects.get(pk=test['storage_id']).storage_capacity)
                gpu = str(GPU.objects.get(pk=test['gpu_name_id']))
                gpu_spec = str(GPU.objects.get(pk=test['gpu_name_id']).gpu_performance)
                power_supply = str(PowerSupply.objects.get(pk=test['power_supply_id']))
                power_supply_spec = str(PowerSupply.objects.get(pk=test['power_supply_id']).power_supply_wattage)
                case = str(Case.objects.get(pk=test['case_id']))
                case_spec = str(Case.objects.get(pk=test['case_id']).case_size)
                likes = test['likes']
                computer_data.append({
                    'cpu_name': cpu,
                    'cpu_spec': cpu_spec,
                    'motherboard': motherboard,
                    'motherboard_spec': motherboard_spec,
                    'ram': ram,
                    'ram_spec': ram_spec,
                    'storage': storage,
                    'storage_spec': storage_spec,
                    'gpu_name': gpu,
                    'gpu_spec': gpu_spec,
                    'power_supply': power_supply,
                    'power_supply_spec': power_supply_spec,
                    'case': case,
                    'case_spec': case_spec,
                    'likes': likes
                })
            print(computer_data)
            return Response(computer_data)
            
        except:
            return Response('No data found')
    
        
        
