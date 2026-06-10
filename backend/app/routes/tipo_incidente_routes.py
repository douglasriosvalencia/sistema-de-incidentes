from fastapi import APIRouter, Depends

from sqlalchemy.orm import Session

from app.config.database import get_db

from app.schemas.tipo_incidente_schema import (
    TipoIncidenteResponse
)

from app.services.tipo_incidente_service import (
    TipoIncidenteService
)

router = APIRouter(
    prefix="/api/tipos-incidente",
    tags=["Tipos de Incidente"]
)


@router.get(
    "",
    response_model=list[TipoIncidenteResponse]
)
def obtener_tipos(
    db: Session = Depends(get_db)
):

    return TipoIncidenteService.obtener_tipos(
        db
    )