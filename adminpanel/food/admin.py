from django.contrib import admin
from django.db.models.query_utils import select_related_descend
from .models import Foods
from .models import Users 
from .models import FoodImages 
# Register your models here.

admin.site.register(Foods)

@admin.register(Users)
class Usersclass(admin.ModelAdmin):
    list_display =('name',)
    ordering = ('name' ,)
    search_fields = ('name' ,'address')
    
