from fastapi_users import BaseUserManager, UUIDIDMixin
from app.models.user import User
from app.db.db import get_user_db

SECRET = "supersecret"  # You can replace this with an environment variable

class UserManager(UUIDIDMixin, BaseUserManager[User, str]):
    reset_password_token_secret = SECRET
    verification_token_secret = SECRET
