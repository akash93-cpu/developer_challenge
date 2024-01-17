from .views import WineList, CreateWineEntry, EditWineEntry
from django.urls import path

app_name = 'wines'

urlpatterns = [

    path('wines/list/', WineList.as_view(), name='wineslist'),
    path('wines/create/', CreateWineEntry.as_view(), name='createwines'),
    path('wines/edit/<int:pk>/', EditWineEntry.as_view(), name='editwines'),

]