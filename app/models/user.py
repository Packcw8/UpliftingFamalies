from fastapi_users.db import SQLAlchemyBaseUserTableUUID
from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column
from app.db.db import Base

class User(SQLAlchemyBaseUserTableUUID, Base):
    full_name: Mapped[str] = mapped_column(String(length=100), nullable=False)
    role: Mapped[str] = mapped_column(String(length=20), default="provider", nullable=False)
    agency: Mapped[str] = mapped_column(String(length=100), nullable=False)  # ✅ Make sure this is included


