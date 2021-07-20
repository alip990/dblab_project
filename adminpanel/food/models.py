from django.db import models
 
# Create your models here.
# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AdonisSchema(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    batch = models.IntegerField(blank=True, null=True)
    migration_time = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'adonis_schema'


class FoodImages(models.Model):
    imageid = models.AutoField(db_column='imageId', primary_key=True)  # Field name made lowercase.
    foodid = models.IntegerField(db_column='foodId')  # Field name made lowercase.
    path = models.CharField(max_length=600)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'food_images'

class Foods(models.Model):
    foodid = models.AutoField(db_column='foodId', primary_key=True)  # Field name made lowercase.
    name = models.CharField(max_length=255)
    categoryname = models.CharField(db_column='categoryName', max_length=255)  # Field name made lowercase.
    description = models.TextField(blank=True, null=True)
    price = models.FloatField()
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'foods'



class OrderDetails(models.Model):
    food_id = models.IntegerField(blank=True, null=True)
    order_id = models.IntegerField(blank=True, null=True)
    quantity = models.IntegerField(blank=True, null=True)
    total_price = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'order_details'


class Orders(models.Model):
    orderid = models.AutoField(db_column='OrderId', primary_key=True)  # Field name made lowercase.
    user = models.ForeignKey('Users', models.DO_NOTHING, blank=True, null=True)
    time_ordered = models.TimeField(blank=True, null=True)
    time_deliverd = models.TimeField(blank=True, null=True)
    status = models.IntegerField(blank=True, null=True)
    price = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'orders'


class Tokens(models.Model):
    user = models.ForeignKey('Users', models.DO_NOTHING, blank=True, null=True)
    token = models.CharField(unique=True, max_length=255)
    type = models.CharField(max_length=80)
    is_revoked = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tokens'


class Users(models.Model):
    name = models.CharField(unique=True, max_length=80)
    email = models.CharField(unique=True, max_length=254)
    password = models.CharField(max_length=60)
    address = models.CharField(max_length=400, blank=True, null=True)
    phone = models.CharField(max_length=13, blank=True, null=True)
    isadmin = models.IntegerField(db_column='isAdmin', blank=True, null=True)  # Field name made lowercase.
    issuperadmin = models.IntegerField(db_column='isSuperAdmin', blank=True, null=True)  # Field name made lowercase.
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'users'
