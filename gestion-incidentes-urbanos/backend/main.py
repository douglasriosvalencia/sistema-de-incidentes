from fastapi import FastAPI

from backend.app.routes.incidente_routes import router as incidente_router

app = FastAPI()

app.include_router(incidente_router)


@app.get("/")
def root():
    return {
        "message": "API funcionando"
    }