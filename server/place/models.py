from __future__ import unicode_literals
from django.db import models
from member.models import User

# Create your models here.
class Place(models.Model):
    host = models.ForeignKey(User, related_name="places")
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    place_type = models.CharField(max_length=25)
    rental_type = models.CharField(max_length=20)
    lng = models.DecimalField(max_digits=22, decimal_places=20, default=0)
    lat = models.DecimalField(max_digits=22, decimal_places=20, default=0)
    streetNumber = models.CharField(max_length=10, default="")
    streetName = models.CharField(max_length=100, default="")
    city = models.CharField(max_length=30, default="")
    state = models.CharField(max_length=5, default="")
    country = models.CharField(max_length=5, default="")
    # house_rules = models.TextField()
    # cancellation_policy = models.CharField(max_length=10)
    # amenities = models.TextField()
    number_of_bedrooms = models.IntegerField()
    number_of_bathrooms = models.IntegerField()
    accommodates = models.IntegerField()
    # times_viewed = models.IntegerField()
    updated_at = models.DateTimeField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now=True)


class Place_Image(models.Model):
    place = models.ForeignKey(Place, related_name="images")
    caption = models.CharField(max_length=40)
    # image = models.ImageField(upload_to="place_images/", blank=False, null=False)
    updated_at = models.DateTimeField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now=True)
