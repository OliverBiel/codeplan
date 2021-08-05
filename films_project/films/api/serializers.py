from rest_framework.serializers import ModelSerializer
from films.models import Movie
from cast.api.serializers import ActorSerializer


class MovieSerializer(ModelSerializer):
    cast = ActorSerializer(many=True)
    class Meta:
        model = Movie
        fields = ['title', 'release_date', 'cast', 'poster']
