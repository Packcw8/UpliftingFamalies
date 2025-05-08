from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


DATABASE_URL = "sqlite+aiosqlite:///./test.db"

engine = create_async_engine(DATABASE_URL, echo=True)

async_session_maker = sessionmaker(
    engine,
    class_=AsyncSession,
    expire_on_commit=False,
)
from app.models.user import User
from fastapi_users.db import SQLAlchemyUserDatabase

async def get_user_db():
    from app.models.user import User  # ✅ move import inside function
    from app.db.db import async_session_maker  # safe here too
    async with async_session_maker() as session:
        yield SQLAlchemyUserDatabase(User, session)

