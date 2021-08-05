# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Actor(models.Model):
    name = models.CharField(max_length=250)
    birthdate = models.DateField()

    class Meta:
        db_table = 'actor'


class ContactDetails(models.Model):
    phone_number = models.CharField(max_length=15)
    address = models.CharField(max_length=250)
    fk_actor = models.ForeignKey(Actor, models.DO_NOTHING, db_column='fk_actor')

    class Meta:
        db_table = 'contact_details'


class ManyMovieHasManyActor(models.Model):
    id_movie = models.OneToOneField('Movie', models.DO_NOTHING, db_column='id_movie', primary_key=True)
    id_actor = models.ForeignKey(Actor, models.DO_NOTHING, db_column='id_actor')

    class Meta:
        db_table = 'many_movie_has_many_actor'
        unique_together = (('id_movie', 'id_actor'),)


class Movie(models.Model):
    title = models.CharField(max_length=250)
    release_date = models.DateField()
    poster = models.TextField(blank=True, null=True)

    class Meta:
        db_table = 'movie'


class Stuntman(models.Model):
    name = models.CharField(max_length=250)
    active = models.BooleanField()
    fk_actor = models.OneToOneField(Actor, models.DO_NOTHING, db_column='fk_actor')

    class Meta:
        managed = False
        db_table = 'stuntman'
