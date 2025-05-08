from fastapi_users_db_sqlalchemy import SQLAlchemyBaseUserTableUUID
from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column
from app.db.db import Base


class User(Base, SQLAlchemyBaseUserTableUUID):
    full_name: Mapped[str] = mapped_column(String(length=100))
    role: Mapped[str] = mapped_column(String(length=20), default="provider")

