from django.shortcuts import render, redirect
from django.views import View
from django.contrib.auth import login
from django.contrib.auth.models import User
from django.contrib.auth.views import LoginView as _LoginView
from .forms import LoginForm, RegisterForm


class LoginView(_LoginView):
  template_name = 'login.html'
  authentication_form = LoginForm

  def get(self, request, *args, **kwargs):
    # Redirects logged users
    if request.user.is_authenticated:
      return redirect('/app')

      # Default get
    else:
      return super().get(request, *args, **kwargs)


class SignUpView(View):

  def get(self, request, *args, **kwargs):
    """
    Renders form page
    """
    return render(request, 'sign_up.html')

  def post(self, request, *args, **kwargs):
    """
    Creastes a new user
    """
    form = RegisterForm(request.POST)

    if (form.is_valid()):
      print("Valido")

      return render(request, 'sign_up.html')


      # user = User.objects.create(username, password=password)
      # login(request, user)

      # return redirect('/app')
    
    else:
      return render(request, 'sign_up.html')