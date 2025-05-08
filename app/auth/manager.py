from fastapi import Depends
from fastapi_users.db import SQLAlchemyUserDatabase
from app.models.user import User
from app.db.db import async_session_maker
from app.db.db import get_user_db


from app.auth.user_manager import UserManager  # ✅ Assuming this exists

async def get_user_manager(user_db: SQLAlchemyUserDatabase = Depends(get_user_db)):
    yield UserManager(user_db)

