from rest_framework.viewsets import ModelViewSet
from films.models import Movie
from films.api.serializers import MovieSerializer


class MovieViewSet(ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
