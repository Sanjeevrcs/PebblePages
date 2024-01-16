# urls.py

from django.urls import path
from .views import *

urlpatterns = [
    # ... your other URL patterns
    path('getBlogs/', getBlogs.as_view(), name='getBlogs'),
]
