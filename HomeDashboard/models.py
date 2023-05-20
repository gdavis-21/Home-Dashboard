from django.db import models

class HouseState(models.Model):
    timestamp = models.DateTimeField(auto_now_add=True)

class Lights(models.Model):
    b1Ceiling = models.BooleanField()
    b1Lamp = models.BooleanField()
    b2Ceiling = models.BooleanField()
    b2Lamp = models.BooleanField()
    b3Ceilin = models.BooleanField()
    b3Lamp = models.BooleanField()
    bathCeiling = models.BooleanField()
    entranceCeiling = models.BooleanField()
    lRCeiling = models.BooleanField()
    lRLeftLamp = models.BooleanField()
    lRRightLmap = models.BooleanField()
    kitchenCeiling = models.BooleanField()
    hallwayCeiling = models.BooleanField()
    garageLeftCeiling = models.BooleanField()
    garageRightCeiling = models.BooleanField()

class Windows(models.Model):
    b1Left = models.BooleanField()
    b1Top = models.BooleanField()
    b2Top = models.BooleanField()
    b2Right = models.BooleanField()
    b3Top = models.BooleanField()
    bathLeft = models.BooleanField()
    entranceLeft = models.BooleanField()
    lRBottom = models.BooleanField()
    kitchenBottom = models.BooleanField()
    hallwayRight = models.BooleanField()
    garageLeft = models.BooleanField()
    garageRight = models.BooleanField()

class Appliances(models.Model):
    bathroomBathtub = models.BooleanField()
    bathroomSink = models.BooleanField()
    lRTV = models.BooleanField()
    kitchenSink = models.BooleanField()
    kitchenStove = models.BooleanField()
    kitchenOven = models.BooleanField()
    kitchenDishWasher = models.BooleanField()
    kitchenMicrowave = models.BooleanField()
    kitchenFridge = models.BooleanField()
    b3TV = models.BooleanField()
    hallwayWasher = models.BooleanField()
    hallwayDryer = models.BooleanField()

class Doors(models.Model):
    b1 = models.BooleanField()
    b2 = models.BooleanField()
    b3 = models.BooleanField()
    bathroom = models.BooleanField()
    front = models.BooleanField()
    kitchen = models.BooleanField()
    garage = models.BooleanField()
    

