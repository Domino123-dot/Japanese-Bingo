# Generated by Django 4.0.2 on 2023-05-02 23:30

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0025_alter_changelog_timestamp'),
    ]

    operations = [
        migrations.AlterField(
            model_name='changelog',
            name='timestamp',
            field=models.DateField(default=django.utils.timezone.now),
        ),
    ]