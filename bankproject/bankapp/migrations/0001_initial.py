# Generated by Django 4.2.5 on 2023-11-01 05:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='wall',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
                ('Dis', models.TextField()),
                ('image', models.ImageField(upload_to='img')),
            ],
        ),
    ]
