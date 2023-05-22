from datetime import date, timedelta
import random
from HomeDashboard.models import HouseState, Lights, Windows, Appliances, Doors

def generateHistoricalData(date1, date2):
    '''
    Generates historical home data from date1 (inclusive) to date2 (inclusive).
    Params:
        date1 (datetime.date): The starting day (inclusive) (e.g. datetime.date(2020, 2, 17)).
        date2 (datetime.date): The ending day (inclusive) (e.g. datetime.date(2020, 5, 17)).
    Returns (JSON)
    [
        #Day 1
        {
        "date": "2020-5-17" (date),
        "electricityUsed": 27 (double) #kWatts,
        "electricityCost": 5.73 (double) #Dollars,
        "waterUsed": 60.22 (double) #Gallons,
        "waterCost": 5.22 (double) #Dollars
        },
        #Day 2
        {
            ...
        },
        ...

    ]

    '''
    result = []
    i = 0
    while (date1 + timedelta(days=i) <= date2):
        i += 1
        result.append({
            "date": date1 + timedelta(days=i),
            "electricityUsed": calculateDailyElectricityUsed(date1 + timedelta(days=i)),
            "electricityCost": calculateDailyElectricityCost(date1 + timedelta(days=i)),
            "waterUsed": calculateDailyWaterUsed(date1 + timedelta(days=i)),
            "waterCost": calculateDailyWaterCost(date1 + timedelta(days=i))
        })
    return result

electricityUsedWeekday = {
    "Stove": 0.875,
    "Oven": 3,
    "Microwave": 0.275,
    "LivingRoomTV": 2.544,
    "BedroomTV": 0.2,
    "Bath": 21.465,
    "Dishwasher": 3.15,
    "ClothesWasher": 6.598,
    "ClothesDryer": 1.5,
    "Fridge": 1.2,
    "HVAC": (3500 * random.randint(12,22))/1000,
    "Lights": (60 * random.randint(4,24))/1000,
    "ExhaustFan": (60 * random.randint(2,6))/1000
}

electricityUsedWeekend = {
    "Stove": 1.75,
    "Oven": 4,
    "Microwave": 0.55,
    "LivingRoomTV": 5.088,
    "BedroomTV": 0.4,
    "Bath": 32.175,
    "Fridge": 1.2,
    "HVAC": (3500 * random.randint(12,22))/1000,
    "Lights": (60 * random.randint(8,24))/1000,
    "ExhaustFan": (60 * random.randint(4,10))/1000
}

waterUsedWeekday = {
    "Bath": 0.37,
    "Dishwasher": 0.02,
    "ClothesWasher": 0.07,
}

waterUsedWeekend = {
    "Bath": 0.56
}


def calculateDailyElectricityUsed(date):
    """
    Calculates the amount of electricty used in a day.
    Params: date (datetime.date) - A given date.
    Returns: (double) The amount of electricity used in a day in kWatts
    """
    electricityUsed = 0

    if (date.weekday() != 5 or date.weekday() != 6):
        # It's not the weekend.
        electricityUsed += electricityUsedWeekday["Stove"] 
        electricityUsed += electricityUsedWeekday["Oven"]
        electricityUsed += electricityUsedWeekday["Microwave"]
        electricityUsed += electricityUsedWeekday["LivingRoomTV"]
        electricityUsed += electricityUsedWeekday["BedroomTV"]
        electricityUsed += electricityUsedWeekday["Bath"]
        electricityUsed += electricityUsedWeekday["Fridge"]
        electricityUsed += electricityUsedWeekday["HVAC"]
        electricityUsed += electricityUsedWeekday["Lights"]
        electricityUsed += electricityUsedWeekday["ExhaustFan"]

        if (date.weekday() == 0 or date.weekday() == 1 or date.weekday() == 2 or date.weekday() == 3):
            # Laundry (washing and drying) and dishes are always done on Mondays, Tuesdays, Wednesdays, and Thursdays.
            electricityUsed += electricityUsedWeekday["Dishwasher"]
            electricityUsed += electricityUsedWeekday["ClothesWasher"]
            electricityUsed += electricityUsedWeekday["ClothesDryer"]
        
    else:
        # It's the weekend.
        electricityUsed += electricityUsedWeekend["Stove"] 
        electricityUsed += electricityUsedWeekend["Oven"]
        electricityUsed += electricityUsedWeekend["Microwave"]
        electricityUsed += electricityUsedWeekend["LivingRoomTV"]
        electricityUsed += electricityUsedWeekend["BedroomTV"]
        electricityUsed += electricityUsedWeekend["Bath"]
        electricityUsed += electricityUsedWeekend["Fridge"]
        electricityUsed += electricityUsedWeekend["HVAC"]
        electricityUsed += electricityUsedWeekend["Lights"]
        electricityUsed += electricityUsedWeekend["ExhaustFan"]
    return electricityUsed
        

def calculateDailyElectricityCost(date):
    """
    Calculates the cost of the electricty consumed in a day.
    Params: date (datetime.date) The date for which the value will be calculated.
    Returns: (double) The cost of electricity consumed in a day.
    """
    COST_OF_1_KILLOWATT = 0.12

    return calculateDailyElectricityUsed(date) * COST_OF_1_KILLOWATT


def calculateDailyWaterUsed(date):
    """
    Calculates the amount of water used in a day.
    Params: date (datetime.date) - A given date.
    Returns: (double) The amount of water used in a day in kWatts
    """
    waterUsed = 0

    if (date.weekday() != 5 or date.weekday() != 6):
        # It's not the weekend
        waterUsed += waterUsedWeekday["Bath"]

        if (date.weekday() == 0 or date.weekday() == 1 or date.weekday() == 2 or date.weekday() == 3):
            # Laundry and dishes are always done on Mondays, Tuesdays, Wednesdays, and Thursdays.
            waterUsed += waterUsedWeekday["Dishwasher"]
            waterUsed += waterUsedWeekday["ClothesWasher"]
    else:
       # It's not the weekend
       waterUsed += waterUsedWeekend["Bath"]
    
    return waterUsed

def calculateDailyWaterCost(date):
    """
    Calculates the cost of the water consumed in a day.
    Params: date (datetime.date) The date for which the value will be calculated.
    Returns: (double) The cost of water consumed in a day.
    """
    COST_OF_1_GALLON = 0.0034

    return calculateDailyWaterUsed(date) * COST_OF_1_GALLON


# def fetchMonthValue():
    # q = Lights(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, HouseState())
    # q.save()
    # print(Lights.objects.filter(houseState__timestamp__month=5))

# generateHistoricalData(date(2020, 1, 1), date(2020,2,1))
# fetchMonthValue()



















"""
Water Cost
- $2.52 per 100 Cubic Feet of water
- 1 Cubic Feet of water is 7.48 Gallons
- 100 Cubic Feet is 748 Gallons
- So 748 Gallons costs $2.52
- 748/2.52 = 1/x, thus one gallon cost $0.0034

Electricity Cost
- $0.12 per kWh (1 kilowatt per hour) ( 1w = 1/1000 kw)

Stove
-	3500 watts
-	Monday - Friday: 15 minutes per day (0.25 hrs per day).
    -   Cost per day: (3500 watts * $0.12 per kWh * 0.25 hrs)/1000 watts = $0.11
-	Saturday - Sunday: 30 minutes per day (0.5 hrs per day)
    -   Cost per day: (3500 watts * $0.12 per kWh * 0.5 hrs)/1000 watts = $0.21 

Oven
-	4000 watts
-	Monday - Friday: 45 minutes per day (0.75 hrs per day).
    -   Cost per day: (4000 watts * $0.12 per kWh * 0.75 hrs)/1000 = $0.36
-	Saturday - Sunday: 60 minutes per day (1 hrs per day)
    -	Cost per day: (4000 watts * $0.12 per kWh * 1 hrs)/1000 = $0.48

Microwave
-	1100 watts
-	Monday - Friday: 15 minutes per day (0.25 hrs per day).
    -	Cost per day: (1100 watts * $0.12 per kWh * 0.25hrs)/1000 = $0.03
-	Saturday - Sunday: 30 minutes per day (0.5 hrs per day).
    -	Cost per day: (1100 watts * $0.12 per kWh * 0.5hrs)/1000 = $0.07

Living Room TV
-	636 watts
-	Monday - Friday: 4 hours per day.
    o	Cost per day: (636 watts * $0.12 per kWh * 4hrs)/1000 = $0.31
-	Saturday - Sunday: 8 hours per day.
    o	Cost per day: (636 watts * $0.12 per kWh * 8hrs)/1000 = $0.61

Bedroom TV
-	100 watts
-	Monday - Friday: 2 hours per day.
    o	Cost per day: (100 watts * $0.12 per kWh * 2hrs)/1000 = $0.02
-	Saturday - Sunday: 4 hours per day.
    o	Cost per day: (100 watts * $0.12 per kWh * 4hrs)/1000 = $0.05

Hot Water Heater
-	4500w.
-	4 Minutes to heat 1 gallon of water.
-	Shower and Bathtub Cost (to heat the water)
    o	Weekday: 71.5 Gallons of hot water, thus takes 286 minutes (4.77 hours) to heat enough water. (4500w * $0.12 per kWh * 4.77 hours)/1000 = $2.58 on a weekday to heat.
    o	Weekend Day: 107.25 Gallons of hot water, thus takes 429 minutes (7.15 hours) to heat enough water. (4500w * $0.12 per kWh * 7.15 hours)/1000 = $3.86 on a weekend day.
-	Dishwasher Cost (to heat water)
    o	6 Gallons of hot water per load, thus takes 24 minutes (0.4 hrs) to heat enough water. (4500w * $0.12 per kWh * 0.4 hrs)/1000watts = $0.22 per load.
-	Clothes Washer (to heat water)
    o	17 Gallons of hot water per load, thus takes 68 minutes (1.133 hrs) to heat enough water. (4500w * $0.12 per kWh * 1.133 hrs)/1000watts = $0.61 per load.

Shower/Bathtub
-	Per shower, 25 gallons of water used (65% hot, 35% cold).
-	Per bath, 30 gallons of water used (65% hot, 35% cold).
-	Monday - Friday: 2 Showers per day. 2 Baths per day.
    o	110 Gallons total. 
        	71.5 Hot gallons (65%)
        	38.5 Cold gallons (35%)
    o	Water cost per weekday: $0.0034 * 110 gallons = $0.37
    o	Electricity cost to heat water per weekday: $2.58 (see above water heater)
    o	Total cost for showers and bath per weekday: $2.95
-	Saturday - Sunday:  3 Showers per day. 3 Baths per day.
    o	165 Gallons total
        	107.25 Hot gallons (65%)
        	57.75 Cold gallons (35%)
    o	Water cost per weekend day: $0.0034 * 165 = $0.56
    o	Electricity cost to heat water per weekend day: $3.86 (see above water heater)
    o	Total cost for showers and bath per weekend day: $4.42

Dishwasher
-	1800 watts
-	6 Gallons of hot water per load.
-	Runs 45 minutes per load (0.75 hrs).
-	4 Loads of dishes per week.
-	Water cost per load: $0.0034 * 6 = $0.02
-	Electricity cost to heat water per dish load: $0.22 (see above water heater)
-	Electricity to run dish washer per dish load: , (1800 watts * $0.12 per kWh * 0.75 hrs)/1000watts = $0.16
-	Total cost for one load: $0.40

Clothes Washer
-	500 watts
-	20 Gallons of water
    o	17 Gallons hot water (85%).
    o	3 Gallons cold water (15%).
-	30 minutes per wash (0.5 hrs)
-	4 loads per week.
-	Cost of water per load: : $0.0034 * 20 = $0.07
-	Cost of electricity to heat water per load: $0.61 (see water heater)
-	Cost of electricity to run clothes washer per load: 3000 watts * $0.12 per kWh * 0.5 hrs)/1000watts = $0.18
-	Total cost to run one load of clothes: $0.86

Clothes Dryer
-	3000 watts
-	30 minutes per load (0.5 hrs)
-	4 loads per week)
-	Cost of electricity per load: 3000 watts * $0.12 per kWh * 0.5 hrs)/1000watts = $0.18

Fridge
-	150 watts
-	I assume that the fridge runs 8hrs a day. (https://paylesspower.com/blog/how-many-watts-does-a-refrigerator-use/)
-	Cost of electricity per day: (150watts * $0.12 per kWh * 8hrs)/1000watts = $0.14

HVAC
-	3500 watts
-	Not sure how long it will run? Will we calculate this based on keeping track of how long it runs in a day manually or will we look up a value?
-	Cost of electricity per day: (3500watts * $0.12 per kWh * ___hrs)/1000 watts = ___

Light Bulbs
-	60 watts for each bulb.
-	Not sure the total amount of time the bulbs will be on?
-	Cost of electricity per day: (60watts * $0.12 per kWh * __hrs)/1000 watts = ____

Exhaust Fan
-	30 watts for exhaust fan.
-	Tied to the lights in both bathrooms.
-	Not sure the total amount of time will be on?
-	Cost of electricity per day: (60watts * $0.12 per kWh * __hrs)/1000 watts = ____
"""