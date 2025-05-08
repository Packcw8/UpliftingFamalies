from app import User
from app import async_session_maker
from fastapi_users.db import SQLAlchemyUserDatabase

async def get_user_db():
    async with async_session_maker() as session:
        yield SQLAlchemyUserDatabase(User, session)
