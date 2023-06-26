from django.db import models
from django.utils import timezone

class Utilities(models.Model):
    electricityUsed = models.DecimalField(default = 0, decimal_places=3, max_digits=9)
    electricityCost = models.DecimalField(default = 0, decimal_places=3, max_digits=9)
    waterUsed = models.DecimalField(default = 0, decimal_places=3, max_digits=9)
    waterCost = models.DecimalField(default = 0, decimal_places=3, max_digits=9)
    date = models.DateField(default = timezone.localdate)

    def __str__(self):
        return f"Date: {self.date}, E Used: {self.electricityUsed}, E Cost: {self.electricityCost}, W Used: {self.waterUsed}, W Cost: {self.waterCost}"

class Temperature(models.Model):
    currentTemperature = models.DecimalField(decimal_places=2, max_digits=5)
    targetTemperature = models.DecimalField(decimal_places=2, max_digits=5)
    dateTime = models.DateTimeField(default = timezone.localtime)

class BedroomLeft(models.Model):
    ceilingLight = models.BooleanField(default=False)
    lamp = models.BooleanField(default = False)
    leftWindow = models.BooleanField(default = False)
    topWindow = models.BooleanField(default = False)
    door = models.BooleanField(default = False)

    def __str__(self):
        return f"Light: {self.ceilingLight}, Lamp: {self.lamp}, LWindow: {self.leftWindow}, TWindow: {self.topWindow}, Door: {self.door}"

class BedroomRight(models.Model):
    ceilingLight = models.BooleanField(default = False)
    lamp = models.BooleanField(default = False)
    rightWindow = models.BooleanField(default = False)
    topWindow = models.BooleanField(default = False)
    door = models.BooleanField(default = False)

    def __str__(self):
        return f"Light: {self.ceilingLight}, Lamp: {self.lamp}, LWindow: {self.leftWindow}, TWindow: {self.topWindow}, Door: {self.door}"

class BedroomMaster(models.Model):
    ceilingLight = models.BooleanField(default = False)
    lamp = models.BooleanField(default = False)
    tv = models.BooleanField(default = False)
    leftWindow = models.BooleanField(default = False)
    rightWindow = models.BooleanField(default = False)
    door = models.BooleanField(default = False)

    def __str__(self):
        return f"Light: {self.ceilingLight}, Lamp: {self.lamp}, TV: {self.tv}, TWindow: {self.topWindow}, Door: {self.door}"

class Bathroom(models.Model):
    ceilingLight = models.BooleanField(default = False)
    sink = models.BooleanField(default = False)
    leftWindow = models.BooleanField(default = False)
    door = models.BooleanField(default = False)

    def __str__(self):
        return f"Light: {self.ceilingLight}, Sink: {self.sink}, LWindow: {self.leftWindow}, LWindow: {self.leftWindow}, Door: {self.door}"

class Entrance(models.Model):
    ceilingLight = models.BooleanField(default = False)
    leftWindow = models.BooleanField(default = False)
    door = models.BooleanField(default = False)

    def __str__(self):
        return f"Light: {self.ceilingLight}, LWindow: {self.leftWindow}, Door: {self.door}"

class LivingRoom(models.Model):
    ceilingLight = models.BooleanField(default = False)
    leftLamp = models.BooleanField(default = False)
    rightLamp = models.BooleanField(default = False)
    tv = models.BooleanField(default = False)
    bottomWindow = models.BooleanField(default = False)

    def __str__(self):
        return f"Light: {self.ceilingLight}, LLamp: {self.leftLamp}, RLamp: {self.rightLamp}, TV: {self.tv}, BWindow: {self.bottomWindow}"

class Kitchen(models.Model):
    ceilingLight = models.BooleanField(default = False)
    sink = models.BooleanField(default = False)
    stove = models.BooleanField(default = False)
    microwave = models.BooleanField(default = False)
    toaster = models.BooleanField(default = False)
    window = models.BooleanField(default=False)
    door = models.BooleanField(default = False)

    def __str__(self):
        return f"Light: {self.ceilingLight}, Sink: {self.sink}, Stove: {self.stove}, Oven: {self.oven}, Dwasher: {self.dishwasher}, MWave: {self.microwave}, Door: {self.door}"


class LaundryRoom(models.Model):
    ceilingLight = models.BooleanField(default = False)
    washer = models.BooleanField(default = False)
    dryer = models.BooleanField(default = False)

    def __str__(self):
        return f"Light: {self.ceilingLight}, Washer: {self.washer}, Dryer: {self.dryer}"

class Garage(models.Model):
    garageHouseDoor = models.BooleanField(default = False)
    ceilingLightLeft = models.BooleanField(default = False)
    ceilingLightRight = models.BooleanField(default = False)
    doorLeft = models.BooleanField(default = False)
    doorRight = models.BooleanField(default = False)


    def __str__(self):
        return f"LLight: {self.ceilingLightLeft}, RLight: {self.ceilingLightRight}, LDoor: {self.doorLeft}, RDoor: {self.doorRight}"