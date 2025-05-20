from db import SessionLocal
from fastapi import Depends, HTTPException, APIRouter, Request
from sqlalchemy.orm import Session
import repository
import models
import schemas
from auth import require_login

newsrouter = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@newsrouter.get('/', response_model=list[schemas.NewsOut])
def get_news(db: Session = Depends(get_db)):
    news = repository.get_all_news(db)
    return news


@newsrouter.get('/{id}', response_model=schemas.NewsOut)
def get_news_by_id(id: int, db: Session = Depends(get_db)):
    news = repository.get_news(db, id)
    if not news:
        raise HTTPException(status_code=404, detail="News not found")
    return news


@newsrouter.post('/', response_model=schemas.NewsOut)
def create_news(news: schemas.NewsCreate, db: Session = Depends(get_db), request: Request = None):
    require_login(request)
    db_news = models.News(**news.model_dump())
    return repository.create_news(db, db_news)


@newsrouter.put('/{id}', response_model=schemas.NewsOut)
def update_news(id: int, news: schemas.NewsCreate, db: Session = Depends(get_db), request: Request = None):
    require_login(request)
    db_news = models.News(**news.model_dump())
    return repository.update_news(db, id, db_news)


@newsrouter.delete('/{id}')
def delete_news(id: int, db: Session = Depends(get_db), request: Request = None):
    require_login(request)
    if repository.delete_news(db, id):
        return {"message": "News deleted successfully"}
    else:
        raise HTTPException(status_code=404, detail="News not found")
