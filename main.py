from fastapi import FastAPI
from db import Base, engine
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.sessions import SessionMiddleware
from news import newsrouter
from teachers import teacherrouter
from auth import auth_router

app = FastAPI(title='IKNT API', version='0.0.1')

Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_middleware(
    SessionMiddleware,
    secret_key="very_ultra_mega_secret_word"
)

app.include_router(newsrouter, prefix="/news", tags=["news"])
app.include_router(teacherrouter, prefix="/teachers", tags=["teachers"])
app.include_router(auth_router, prefix="/auth", tags=["auth"])
