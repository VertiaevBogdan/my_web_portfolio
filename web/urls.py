from django.urls import path
from web.views import page, download_resume

urlpatterns = [
    path('', page),
    path('download-resume/', download_resume, name='download_resume'),
]
