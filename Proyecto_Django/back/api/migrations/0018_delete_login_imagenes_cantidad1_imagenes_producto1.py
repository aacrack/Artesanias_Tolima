# Generated by Django 4.2.6 on 2023-12-08 22:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0017_rename_producto1_login_contraseña_remove_login_type_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='login',
        ),
        migrations.AddField(
            model_name='imagenes',
            name='cantidad1',
            field=models.CharField(default=12, max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='imagenes',
            name='producto1',
            field=models.CharField(default=12, max_length=50),
            preserve_default=False,
        ),
    ]
