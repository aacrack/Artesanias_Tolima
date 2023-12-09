# Generated by Django 4.2.6 on 2023-12-09 01:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0020_remove_imagenes_cantidad1_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='imagenes',
            name='description',
            field=models.CharField(default=12, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='imagenes',
            name='price_inversion',
            field=models.IntegerField(default=13),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='imagenes',
            name='price_venta',
            field=models.IntegerField(default=14),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='imagenes',
            name='product',
            field=models.CharField(default=17, max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='imagenes',
            name='quantity',
            field=models.IntegerField(default=18),
            preserve_default=False,
        ),
    ]
