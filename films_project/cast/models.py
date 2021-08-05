from django.db import models


class Actor(models.Model):
    name = models.CharField(max_length=250)
    birthdate = models.DateField()

    class Meta:
        db_table = 'actor'

    def __str__(self):
        return self.name


class ContactDetails(models.Model):
    phone_number = models.CharField(max_length=15)
    address = models.CharField(max_length=250)
    fk_actor = models.ForeignKey(Actor, models.DO_NOTHING, db_column='fk_actor')

    class Meta:
        db_table = 'contact_details'

    def __str__(self):
        return self.fk_actor.name + f'| {self.phone_number}'


class Stuntman(models.Model):
    name = models.CharField(max_length=250)
    active = models.BooleanField()
    fk_actor = models.OneToOneField(Actor, models.DO_NOTHING, db_column='fk_actor')

    class Meta:
        db_table = 'stuntman'

    def __str__(self):
        return self.name
