# Generated by Django 3.2.2 on 2021-05-11 10:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cast', '0001_initial'),
        ('films', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='cast',
            field=models.ManyToManyField(to='cast.Actor'),
        ),
    ]
