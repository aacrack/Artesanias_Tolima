# Generated by Django 4.2.6 on 2023-12-13 14:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0025_register_productos_img1_register_productos_img2'),
    ]

    operations = [
        migrations.RenameField(
            model_name='register',
            old_name='usuario',
            new_name='user',
        ),
    ]
