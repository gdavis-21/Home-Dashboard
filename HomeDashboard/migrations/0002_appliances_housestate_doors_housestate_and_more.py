# Generated by Django 4.2.1 on 2023-05-22 19:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("HomeDashboard", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="appliances",
            name="houseState",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="HomeDashboard.housestate",
            ),
        ),
        migrations.AddField(
            model_name="doors",
            name="houseState",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="HomeDashboard.housestate",
            ),
        ),
        migrations.AddField(
            model_name="lights",
            name="houseState",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="HomeDashboard.housestate",
            ),
        ),
        migrations.AddField(
            model_name="windows",
            name="houseState",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="HomeDashboard.housestate",
            ),
        ),
    ]