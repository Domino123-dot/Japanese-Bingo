# Generated by Django 4.0.2 on 2023-05-02 23:14

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0021_remove_changelog_timestamp'),
    ]

    operations = [
        migrations.AddField(
            model_name='changelog',
            name='timestamp',
            field=models.DateTimeField(default=datetime.datetime(2023, 5, 2, 23, 14, 31, 935203)),
        ),
    ]