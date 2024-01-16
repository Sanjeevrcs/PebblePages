from rest_framework.response import Response
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

class getBlogs(generics.ListAPIView):
    
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        response = {
            'message': 'token works.'
        }
        print("token works",request.user.is_authenticated)
        return Response(response, status=200)
    