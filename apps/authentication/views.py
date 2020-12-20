from django.shortcuts import render
from django.views import View
from django.contrib.auth.views import LoginView as _LoginView
from .forms import LoginForm


class LoginView(_LoginView):
  template_name = 'login.html'
  authentication_form = LoginForm


class SignUpView(View):
  def get(self, request, *args, **kwargs):
    return render(request, 'sign_up.html')