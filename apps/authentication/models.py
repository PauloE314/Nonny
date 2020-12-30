from django.db import models
from django.contrib.auth.models import User

class ProfileImage(models.Model):
  user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="image")
  image = models.ImageField(upload_to="profile", blank=True)