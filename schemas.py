from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime


class NewsBase(BaseModel):
    title: str
    content: str
    date: Optional[datetime] = None
    pic: Optional[str] = None


class NewsCreate(NewsBase):
    pass


class NewsOut(NewsBase):
    id: int

    class Config:
        from_attributes = True


class TeacherBase(BaseModel):
    name: str
    title: Optional[str] = None
    email: EmailStr
    pic: Optional[str] = None


class TeacherCreate(TeacherBase):
    pass


class TeacherOut(TeacherBase):
    id: int

    class Config:
        from_attributes = True
