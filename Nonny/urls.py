from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("", include("apps.home.urls")),
    path('admin/', admin.site.urls),
    path("authentication/", include("apps.authentication.urls")),
    path("app/", include("apps.workspace.urls")),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
