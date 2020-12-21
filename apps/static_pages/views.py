from django.shortcuts import render
from django.views import View

class HomeView(View):
    """
    Page for 404 error
    """
    def get(self, request, *args, **kwargs):
        return render(request, 'home.html')


def error500View(request, *args, **kwargs):
    """
    Page for 500 error
    """
    return render(request, '500.html')

def error404View(request, *args, **kwargs):
    """
    Page for 404 error
    """
    return render(request, '404.html')