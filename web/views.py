from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings
import os

def page(request):

    return render(request, "../templates/web/index.html")

def download_resume(request):
    # Path to your resume file
    resume_path = os.path.join(settings.BASE_DIR, 'web/static/web/downloads/resume.pdf')

    # Opens a file and reads it
    with open(resume_path, 'rb') as resume_file:
        response = HttpResponse(resume_file.read(), content_type='application/pdf')
        response['Content-Disposition'] = 'attachment; filename="resume.pdf"' # The file name that the user will see

    return response