from app import async_session_maker
from app import User
from fastapi_users_db_sqlalchemy import SQLAlchemyUserDatabase

async def get_user_db():
    async with async_session_maker() as session:
        yield SQLAlchemyUserDatabase(session, User)
