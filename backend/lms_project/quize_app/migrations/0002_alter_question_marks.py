# Generated by Django 3.2.23 on 2024-03-05 07:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quize_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='marks',
            field=models.IntegerField(default=2),
        ),
    ]