from django.db import models
from cast.models import Actor


class Movie(models.Model):
    title = models.CharField(max_length=250)
    release_date = models.DateField()
    poster = models.ImageField(blank=True, null=True)
    cast = models.ManyToManyField(Actor)

    class Meta:
        db_table = 'movie'

    def __str__(self):
        return self.title
