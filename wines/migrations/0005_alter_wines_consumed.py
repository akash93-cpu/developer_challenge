# Generated by Django 4.1.3 on 2024-01-13 17:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wines', '0004_alter_wines_consumed'),
    ]

    operations = [
        migrations.AlterField(
            model_name='wines',
            name='consumed',
            field=models.BooleanField(),
        ),
    ]