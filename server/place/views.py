from __future__ import unicode_literals
from django.shortcuts import render
from models import Place
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers
from member.models import User
import json
@csrf_exempt
def create(request): 
    print "REQUEST IS"
    print request.body
    placeRequest = json.loads(request.body)
    print placeRequest
    for item in placeRequest:
        print item  
    user =  User.objects.get(pk=int(placeRequest[u'_user'])) 
    print user
    place = Place.objects.create(
        host = user,
        name = placeRequest[u'title'],
        description = placeRequest[u'description'],
        price = float(placeRequest[u'price']),
        place_type = placeRequest[u'placeType'],
        rental_type = placeRequest[u'rentalType'],
        lng = placeRequest[u'long'],
        lat = placeRequest[u'lat'],
        streetNumber = placeRequest[u'streetNumber'],
        streetName = placeRequest[u'streetName'],
        city = placeRequest[u'city'],
        state = placeRequest[u'state'],
        country = placeRequest[u'country'],
        number_of_bedrooms = int(placeRequest[u'beds']),
        number_of_bathrooms = int(placeRequest[u'baths']),
        accommodates = int(placeRequest[u'accomodates'])
    )
    newPlace = Place.objects.filter(pk=place.id)
    return HttpResponse(serializers.serialize('json', newPlace), content_type = 'application/json')

    
