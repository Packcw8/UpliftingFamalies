from pydantic import EmailStr
from fastapi_users import schemas
from uuid import UUID

class UserRead(schemas.BaseUser[UUID]):
    full_name: str
    role: str
    agency: str

class UserCreate(schemas.BaseUserCreate):
    email: EmailStr
    password: str
    full_name: str
    role: str
    agency: str
    is_active: bool = True
    is_superuser: bool = False
    is_verified: bool = False

class UserUpdate(schemas.BaseUserUpdate):
    full_name: str
    role: str
    agency: str
