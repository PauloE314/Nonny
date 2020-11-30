from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.shortcuts import render
from django.views import View

class SecretView(View):
    @method_decorator(login_required)
    def get(self, request):
        return HttpResponse('result')
