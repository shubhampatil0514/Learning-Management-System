# Generated by Django 3.2.23 on 2024-02-04 12:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customstudent',
            name='username',
            field=models.CharField(max_length=30),
        ),
    ]
