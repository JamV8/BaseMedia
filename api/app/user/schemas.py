from pydantic import BaseModel, EmailStr
from api.app.user.models import UserModel
from tortoise.contrib.pydantic import pydantic_model_creator


class UserCreate(BaseModel):
    email: EmailStr
    username: str
    password: str


class UserLogin(BaseModel):
    email_username: str | EmailStr
    password: str


class UserPublic(BaseModel):
    id: int
    username: str

    class Config:
        orm_mode = True


UserOut = pydantic_model_creator(
    UserModel,
    name='UserOut',
    exclude=('password',)
)
