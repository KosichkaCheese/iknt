from sqlalchemy.orm import Session
import models


def get_all_news(db: Session):
    return db.query(models.News).all()


def get_news(db: Session, id: int):
    return db.query(models.News).filter(models.News.id == id).first()


def create_news(db: Session, news: models.News):
    db.add(news)
    db.commit()
    db.refresh(news)
    return news


def update_news(db: Session, id: int, news: models.News):
    db_news = db.query(models.News).filter(models.News.id == id).first()
    db_news.title = news.title
    db_news.content = news.content
    db_news.pic = news.pic
    db_news.date = news.date
    db.commit()
    db.refresh(db_news)
    return db_news


def delete_news(db: Session, id: int):
    db.query(models.News).filter(models.News.id == id).delete()
    db.commit()
    return True


def get_all_teachers(db: Session):
    return db.query(models.Teacher).all()


def get_teacher(db: Session, id: int):
    return db.query(models.Teacher).filter(models.Teacher.id == id).first()


def create_teacher(db: Session, teacher: models.Teacher):
    db.add(teacher)
    db.commit()
    db.refresh(teacher)
    return teacher


def update_teacher(db: Session, id: int, teacher: models.Teacher):
    db_teacher = db.query(models.Teacher).filter(
        models.Teacher.id == id).first()
    db_teacher.name = teacher.name
    db_teacher.title = teacher.title
    db_teacher.email = teacher.email
    db_teacher.pic = teacher.pic
    db.commit()
    db.refresh(db_teacher)
    return db_teacher


def delete_teacher(db: Session, id: int):
    db.query(models.Teacher).filter(models.Teacher.id == id).delete()
    db.commit()
    return True
