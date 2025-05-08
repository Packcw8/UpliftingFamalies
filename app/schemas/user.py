from pydantic import EmailStr
from fastapi_users import schemas
from uuid import UUID



class UserUpdate(schemas.BaseUserUpdate):
    full_name: str
    role: str


class UserRead(schemas.BaseUser[UUID]):
    full_name: str
    role: str

class UserCreate(schemas.BaseUserCreate):
    class UserCreate(schemas.BaseUserCreate):
        full_name: str
        role: str
        agency: str  # 🆕 required agency field
        is_active: bool = True
        is_superuser: bool = False
        is_verified: bool = False
