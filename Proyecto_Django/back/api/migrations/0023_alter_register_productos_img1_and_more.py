# Generated by Django 4.2.6 on 2023-12-09 15:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0022_rename_foto_register_productos_img_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='register_productos',
            name='img1',
            field=models.ImageField(default='animales/perro.png', upload_to='animales/'),
        ),
        migrations.AlterField(
            model_name='register_productos',
            name='img2',
            field=models.ImageField(default='animales/perro.png', upload_to='animales/'),
        ),
    ]
