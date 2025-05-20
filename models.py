from sqlalchemy import Column, Integer, String, Text, DateTime
from datetime import datetime
from db import Base


class News(Base):
    __tablename__ = 'news'

    id = Column(Integer, primary_key=True)
    pic = Column(String)
    title = Column(String, nullable=False)
    date = Column(DateTime, default=datetime.now())
    content = Column(Text)


class Teacher(Base):
    __tablename__ = 'teachers'

    id = Column(Integer, primary_key=True)
    pic = Column(String)
    name = Column(String, nullable=False)
    title = Column(String)
    email = Column(String, unique=True, nullable=False)
