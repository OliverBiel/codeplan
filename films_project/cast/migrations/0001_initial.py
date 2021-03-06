# Generated by Django 3.2.2 on 2021-05-11 09:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Actor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
                ('birthdate', models.DateField()),
            ],
            options={
                'db_table': 'actor',
            },
        ),
        migrations.CreateModel(
            name='Stuntman',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
                ('active', models.BooleanField()),
                ('fk_actor', models.OneToOneField(db_column='fk_actor', on_delete=django.db.models.deletion.DO_NOTHING, to='cast.actor')),
            ],
            options={
                'db_table': 'stuntman',
            },
        ),
        migrations.CreateModel(
            name='ContactDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('phone_number', models.CharField(max_length=15)),
                ('address', models.CharField(max_length=250)),
                ('fk_actor', models.ForeignKey(db_column='fk_actor', on_delete=django.db.models.deletion.DO_NOTHING, to='cast.actor')),
            ],
            options={
                'db_table': 'contact_details',
            },
        ),
    ]
