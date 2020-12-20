from django.shortcuts import render
from django.views import View
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator


class DashboardView(View):
  
  # Renders dashboard screen
  @method_decorator(login_required)
  def get(self, request, *args, **kwargs):
    return render(request, 'dashboard.html')
