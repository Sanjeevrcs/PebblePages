from datetime import datetime, timezone
from django.http import JsonResponse
from django.conf import settings
from re import sub
from oauth2_provider.models import AccessToken

class HttpResponseUnauthorized(JsonResponse):
    def __init__(self):
        super().__init__({'error': 'Unauthorized Access'}, status=401)


class AuthenticationMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        self.excluded_paths = getattr(settings, 'AUTH_MIDDLEWARE_EXCLUDED_PATHS', [])

    def __call__(self, request):
        header_token = request.META.get('HTTP_AUTHORIZATION', None)
        if header_token is not None:
            try:
                token = sub('Bearer ', '', header_token)
                token_obj = AccessToken.objects.get(token=token)
                if token_obj.expires is not None and token_obj.expires < datetime.now(timezone.utc):
                    return HttpResponseUnauthorized()
                request.user = token_obj.user
            except AccessToken.DoesNotExist:
                return HttpResponseUnauthorized()
        valid = request.user.is_authenticated or request.path in self.excluded_paths or request.path.startswith('/auth/') or request.path.startswith('/admin/')
        if not valid:
            return HttpResponseUnauthorized()
            # pass
        response = self.get_response(request)
        return response
    