from rest_framework.viewsets import ModelViewSet
from cast.models import Actor, ContactDetails, Stuntman
from cast.api.serializers import ContactDetailsSerializer, ActorSerializer, StuntmanSerializer


class ActorViewSet(ModelViewSet):
    queryset = Actor.objects.all()
    serializer_class = ActorSerializer


class ContactDetailsViewSet(ModelViewSet):
    queryset = ContactDetails.objects.all()
    serializer_class = ContactDetailsSerializer


class StuntmanViewSet(ModelViewSet):
    queryset = Stuntman.objects.all()
    serializer_class = StuntmanSerializer