from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

DATABASE_URL = "sqlite+aiosqlite:///./test.db"  # or use env var later for PostgreSQL

engine = create_async_engine(DATABASE_URL, echo=True)

async_session_maker = sessionmaker(
    engine,
    class_=AsyncSession,
    expire_on_commit=False,
)

from fastapi_users.db import SQLAlchemyUserDatabase

async def get_user_db():
    from app.models.user import User  # ✅ moved inside to avoid circular import
    async with async_session_maker() as session:
        yield SQLAlchemyUserDatabase(User, session)


