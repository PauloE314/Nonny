from django import forms
from django.contrib.auth.forms import AuthenticationForm

class LoginForm(AuthenticationForm):
  def confirm_login_allowed(self, user):
    print("Confirmado")

class RegisterForm(forms.Form):
  pass