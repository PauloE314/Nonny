from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm

class LoginForm(AuthenticationForm):
  pass

class RegisterForm(UserCreationForm):
  image = forms.ImageField(required=False)
