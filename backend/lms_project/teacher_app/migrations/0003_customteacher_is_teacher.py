# Generated by Django 3.2.23 on 2024-02-06 06:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teacher_app', '0002_alter_customteacher_username'),
    ]

    operations = [
        migrations.AddField(
            model_name='customteacher',
            name='is_teacher',
            field=models.BooleanField(default=True),
        ),
    ]
