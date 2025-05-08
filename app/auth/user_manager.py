from fastapi_users import BaseUserManager, UUIDIDMixin
from app.models.user import User
from app.db.db import get_user_db
from fastapi_users.db import SQLAlchemyUserDatabase
from typing import Optional, Union
from app.schemas.user import UserCreate

SECRET = "supersecret"

class UserManager(UUIDIDMixin, BaseUserManager[User, str]):
    reset_password_token_secret = SECRET
    verification_token_secret = SECRET

    async def create(
            self,
            user_create: UserCreate,
            safe: bool = False,
            request: Optional[object] = None,
    ) -> User:
        user_dict = user_create.dict()
        password = user_dict.pop("password")

        hashed_password = self.password_helper.hash(password)
        user_dict["hashed_password"] = hashed_password

        created_user = User(**user_dict)
        self.user_db.session.add(created_user)
        await self.user_db.session.commit()
        await self.user_db.session.refresh(created_user)
        return created_user


