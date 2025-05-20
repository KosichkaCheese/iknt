from db import SessionLocal
from fastapi import Depends, HTTPException, APIRouter, Request
from sqlalchemy.orm import Session
import repository
import models
import schemas
from auth import require_login

teacherrouter = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@teacherrouter.get('/', response_model=list[schemas.TeacherOut])
def get_teachers(db: Session = Depends(get_db)):
    teachers = repository.get_all_teachers(db)
    return teachers


@teacherrouter.get('/{id}', response_model=schemas.TeacherOut)
def get_teacher_by_id(id: int, db: Session = Depends(get_db)):
    teacher = repository.get_teacher(db, id)
    if not teacher:
        raise HTTPException(status_code=404, detail="Teacher not found")
    return teacher


@teacherrouter.post('/', response_model=schemas.TeacherOut)
def create_teacher(teacher: schemas.TeacherCreate, db: Session = Depends(get_db), request: Request = None):
    require_login(request)
    db_teacher = models.Teacher(**teacher.model_dump())
    return repository.create_teacher(db, db_teacher)


@teacherrouter.put('/{id}', response_model=schemas.TeacherOut)
def update_teacher(id: int, teacher: schemas.TeacherCreate, db: Session = Depends(get_db), request: Request = None):
    require_login(request)
    db_teacher = models.Teacher(**teacher.model_dump())
    return repository.update_teacher(db, id, db_teacher)


@teacherrouter.delete('/{id}')
def delete_teacher(id: int, db: Session = Depends(get_db), request: Request = None):
    require_login(request)
    if repository.delete_teacher(db, id):
        return {"message": "Teacher deleted successfully"}
    else:
        raise HTTPException(status_code=404, detail="Teacher not found")
