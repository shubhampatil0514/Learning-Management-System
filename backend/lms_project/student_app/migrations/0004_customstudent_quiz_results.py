# Generated by Django 3.2.23 on 2024-03-05 07:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student_app', '0003_alter_customstudent_profile_img'),
    ]

    operations = [
        migrations.AddField(
            model_name='customstudent',
            name='quiz_results',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
