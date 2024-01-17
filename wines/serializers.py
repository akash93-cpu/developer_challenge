from .models import Wines
from rest_framework import serializers

class WineSerializer(serializers.ModelSerializer):

    class Meta:
        model = Wines
        fields = '__all__'