from django.db import models
from django.utils import timezone
from django.conf import settings
from django.core.validators import MaxValueValidator
from django.core.validators import MinValueValidator


# Create your models here.

class Wines(models.Model):
    
    name = models.CharField(max_length=50)
    year = models.PositiveIntegerField()
    type = models.CharField(max_length=14)
    varietal = models.CharField(max_length=50)
    rating = models.FloatField(default=0.0, validators=[MinValueValidator(1.0), MaxValueValidator(5.0)])
    consumed = models.BooleanField()
    date_consumed = models.DateField(default=timezone.now)