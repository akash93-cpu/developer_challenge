from django.shortcuts import render
from rest_framework import generics
from rest_framework import viewsets
from rest_framework import filters
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.permissions import SAFE_METHODS, IsAuthenticated, IsAuthenticatedOrReadOnly, IsAdminUser
from .serializers import WineSerializer
from .models import Wines

# Create your views here.

class WineList(generics.ListAPIView):

    permission_classes = [IsAuthenticated]
    serializer_class = WineSerializer
    queryset = Wines.objects.all()

class CreateWineEntry(generics.CreateAPIView):

    permission_classes = [IsAuthenticated]
    serializer_class = WineSerializer
    queryset = Wines.objects.all()

class EditWineEntry(generics.RetrieveUpdateAPIView):

    permission_classes = [IsAuthenticated]
    serializer_class = WineSerializer
    queryset = Wines.objects.all()