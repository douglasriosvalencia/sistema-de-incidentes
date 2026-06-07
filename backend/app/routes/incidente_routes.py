from fastapi import APIRouter, Depends, HTTPException

from sqlalchemy.orm import Session

from backend.app.config.database import get_db

from backend.app.schemas.incidente_schema import (
    IncidenteCreate,
    IncidenteResponse,
    IncidenteUpdate,
    EstadoUpdate,
    HistorialEstadoResponse,
    EstadisticasResponse
)

from backend.app.services.incidente_service import IncidenteService

router = APIRouter(
    prefix="/api/incidentes",
    tags=["Incidentes"]
)


# ==================================
# CREAR INCIDENTE
# ==================================
@router.post(
    "",
    response_model=IncidenteResponse
)
def crear_incidente(
    incidente: IncidenteCreate,
    db: Session = Depends(get_db)
):

    nuevo_incidente = IncidenteService.crear_incidente(
        db,
        incidente
    )

    if nuevo_incidente == "prioridad_invalida":
        raise HTTPException(
            status_code=400,
            detail="Prioridad no permitida"
        )

    return nuevo_incidente


# ==================================
# LISTAR INCIDENTES
# ==================================
@router.get(
    "",
    response_model=list[IncidenteResponse]
)
def obtener_incidentes(
    db: Session = Depends(get_db)
):

    return IncidenteService.obtener_incidentes(
        db
    )
# ==================================
# ESTADISTICAS
# ==================================
@router.get(
    "/estadisticas",
    response_model=EstadisticasResponse
)
def obtener_estadisticas(
    db: Session = Depends(get_db)
):

    return IncidenteService.obtener_estadisticas(
        db
    )


# ==================================
# OBTENER POR ID
# ==================================
@router.get(
    "/{incidente_id}",
    response_model=IncidenteResponse
)
def obtener_incidente_por_id(
    incidente_id: int,
    db: Session = Depends(get_db)
):

    incidente = IncidenteService.obtener_incidente_por_id(
        db,
        incidente_id
    )

    if not incidente:
        raise HTTPException(
            status_code=404,
            detail="Incidente no encontrado"
        )

    return incidente


# ==================================
# ACTUALIZAR INCIDENTE
# ==================================
@router.put(
    "/{incidente_id}",
    response_model=IncidenteResponse
)
def actualizar_incidente(
    incidente_id: int,
    incidente: IncidenteUpdate,
    db: Session = Depends(get_db)
):

    incidente_actualizado = (
        IncidenteService.actualizar_incidente(
            db,
            incidente_id,
            incidente
        )
    )

    if incidente_actualizado == "prioridad_invalida":
        raise HTTPException(
            status_code=400,
            detail="Prioridad no permitida"
        )

    if not incidente_actualizado:
        raise HTTPException(
            status_code=404,
            detail="Incidente no encontrado"
        )

    return incidente_actualizado


# ==================================
# CAMBIAR ESTADO
# ==================================
@router.patch(
    "/{incidente_id}/estado",
    response_model=IncidenteResponse
)
def cambiar_estado(
    incidente_id: int,
    estado: EstadoUpdate,
    db: Session = Depends(get_db)
):

    incidente = IncidenteService.cambiar_estado(
        db,
        incidente_id,
        estado
    )

    if incidente is None:
        raise HTTPException(
            status_code=404,
            detail="Incidente no encontrado"
        )

    if incidente == "estado_invalido":
        raise HTTPException(
            status_code=400,
            detail="Estado no permitido"
        )

    return incidente


# ==================================
# HISTORIAL DE ESTADOS
# ==================================
@router.get(
    "/{incidente_id}/historial",
    response_model=list[HistorialEstadoResponse]
)
def obtener_historial(
    incidente_id: int,
    db: Session = Depends(get_db)
):

    return IncidenteService.obtener_historial(
        db,
        incidente_id
    )

# ==================================
# FILTRAR POR ESTADO
# ==================================
@router.get(
    "/estado/{estado}",
    response_model=list[IncidenteResponse]
)
def obtener_por_estado(
    estado: str,
    db: Session = Depends(get_db)
):

    return IncidenteService.obtener_por_estado(
        db,
        estado
    )
# ==================================
# FILTRAR POR PRIORIDAD
# ==================================
@router.get(
    "/prioridad/{prioridad}",
    response_model=list[IncidenteResponse]
)
def obtener_por_prioridad(
    prioridad: str,
    db: Session = Depends(get_db)
):

    return IncidenteService.obtener_por_prioridad(
        db,
        prioridad
    )
