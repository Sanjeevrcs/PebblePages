from django.db import models
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin,BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("Users must have an email address")
        
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password, **extra_fields):
        user = self.create_user(email, password, **extra_fields)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        return user
    
class User(AbstractBaseUser,PermissionsMixin):
    email = models.EmailField(max_length=255,unique=True)
    first_name = models.CharField(max_length=255,null=True,blank=True)
    last_name = models.CharField(max_length=255,null=True,blank=True)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    objects = UserManager()
    USERNAME_FIELD = 'email'
    
    def __str__(self):
        return self.email


class List(models.Model):
    list_name = models.CharField(max_length=100,null=False,blank=False)
    list_created = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey('User', on_delete=models.CASCADE,related_name='UsersLists')
    list_items = models.JSONField(null=True,default=dict,blank=True)
    
    def __str__(self):
        return self.user + self.list_name
    
