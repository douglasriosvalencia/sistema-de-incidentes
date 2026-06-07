from fastapi import FastAPI

from backend.app.routes.incidente_routes import (
    router as incidente_router
)

from backend.app.routes.tipo_incidente_routes import (
    router as tipo_incidente_router
)

app = FastAPI()

app.include_router(
    incidente_router
)

app.include_router(
    tipo_incidente_router
)


@app.get("/")
def root():

    return {
        "message": "API funcionando"
    }

@app.get("/health")
def health_check():

    return {
        "status": "ok"
    }
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.app.routes.incidente_routes import (
    router as incidente_router
)

from backend.app.routes.tipo_incidente_routes import (
    router as tipo_incidente_router
)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(incidente_router)
app.include_router(tipo_incidente_router)


@app.get("/")
def root():

    return {
        "message": "API funcionando"
    }