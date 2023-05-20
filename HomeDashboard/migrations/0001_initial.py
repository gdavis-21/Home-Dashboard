# Generated by Django 4.2.1 on 2023-05-20 02:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Appliances",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("bathroomBathtub", models.BooleanField()),
                ("bathroomSink", models.BooleanField()),
                ("lRTV", models.BooleanField()),
                ("kitchenSink", models.BooleanField()),
                ("kitchenStove", models.BooleanField()),
                ("kitchenOven", models.BooleanField()),
                ("kitchenDishWasher", models.BooleanField()),
                ("kitchenMicrowave", models.BooleanField()),
                ("kitchenFridge", models.BooleanField()),
                ("b3TV", models.BooleanField()),
                ("hallwayWasher", models.BooleanField()),
                ("hallwayDryer", models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name="Doors",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("b1", models.BooleanField()),
                ("b2", models.BooleanField()),
                ("b3", models.BooleanField()),
                ("bathroom", models.BooleanField()),
                ("front", models.BooleanField()),
                ("kitchen", models.BooleanField()),
                ("garage", models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name="HouseState",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("timestamp", models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name="Lights",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("b1Ceiling", models.BooleanField()),
                ("b1Lamp", models.BooleanField()),
                ("b2Ceiling", models.BooleanField()),
                ("b2Lamp", models.BooleanField()),
                ("b3Ceilin", models.BooleanField()),
                ("b3Lamp", models.BooleanField()),
                ("bathCeiling", models.BooleanField()),
                ("entranceCeiling", models.BooleanField()),
                ("lRCeiling", models.BooleanField()),
                ("lRLeftLamp", models.BooleanField()),
                ("lRRightLmap", models.BooleanField()),
                ("kitchenCeiling", models.BooleanField()),
                ("hallwayCeiling", models.BooleanField()),
                ("garageLeftCeiling", models.BooleanField()),
                ("garageRightCeiling", models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name="Windows",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("b1Left", models.BooleanField()),
                ("b1Top", models.BooleanField()),
                ("b2Top", models.BooleanField()),
                ("b2Right", models.BooleanField()),
                ("b3Top", models.BooleanField()),
                ("bathLeft", models.BooleanField()),
                ("entranceLeft", models.BooleanField()),
                ("lRBottom", models.BooleanField()),
                ("kitchenBottom", models.BooleanField()),
                ("hallwayRight", models.BooleanField()),
                ("garageLeft", models.BooleanField()),
                ("garageRight", models.BooleanField()),
            ],
        ),
    ]
