from fastapi import APIRouter, Request, HTTPException, Form
from fastapi.responses import HTMLResponse, JSONResponse

ADMIN_LOGIN = "admin"
ADMIN_PASSWORD = "admin123"

auth_router = APIRouter()


@auth_router.post("/login")
async def login(request: Request, username: str = Form(...), password: str = Form(...)):
    if username == ADMIN_LOGIN and password == ADMIN_PASSWORD:
        request.session["logged_in"] = True
        request.session["user"] = username
        print(request.session)
        return HTMLResponse(content="Login successful", status_code=200)
    return HTMLResponse(content="Invalid credentials", status_code=401)


@auth_router.post("/logout")
async def logout(request: Request):
    request.session.clear()
    print(request.session)
    return {"message": "Logout successful"}


@auth_router.get("/check")
async def check_login(request: Request):
    if 'user' in request.session:
        return JSONResponse(content="Logged in", status_code=200)
    return JSONResponse(content="Not logged in", status_code=401)


def require_login(request: Request):
    if "user" not in request.session:
        raise HTTPException(status_code=403, detail="Forbidden")
