from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import pre_delete
from django.dispatch import receiver

class ProfileImage(models.Model):
  user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="image")
  image = models.ImageField(upload_to="profile", blank=True)


@receiver(pre_delete, sender=ProfileImage)
def delete_image(sender, instance, **kwargs):
  instance.image.delete(save=True)
  