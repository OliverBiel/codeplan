from rest_framework.serializers import ModelSerializer
from cast.models import Actor, Stuntman, ContactDetails


class ActorSerializer(ModelSerializer):
    class Meta:
        model = Actor
        fields = ['name', 'birthdate']


class StuntmanSerializer(ModelSerializer):
    class Meta:
        model = Stuntman
        fields = ['name', 'active', 'fk_actor']


class ContactDetailsSerializer(ModelSerializer):
    class Meta:
        model = ContactDetails
        fields = ['phone_number', 'address', 'fk_actor']
