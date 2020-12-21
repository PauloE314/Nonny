from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("", include("apps.static_pages.urls")),
    path('admin/', admin.site.urls),
    path("authentication/", include("apps.authentication.urls")),
    path("app/", include("apps.workspace.urls")),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

handler404 = 'apps.static_pages.views.error404View'
handler500 = 'apps.static_pages.views.error500View'