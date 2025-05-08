from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from fastapi import Depends
from fastapi_users.db import SQLAlchemyUserDatabase

Base = declarative_base()

DATABASE_URL = "sqlite+aiosqlite:///./test.db"

engine = create_async_engine(DATABASE_URL, echo=True)

async_session_maker = sessionmaker(
    engine,
    class_=AsyncSession,
    expire_on_commit=False,
)

async def get_user_db(session: AsyncSession = Depends(async_session_maker)):
    from app.models.user import User
    yield SQLAlchemyUserDatabase(session, User)



