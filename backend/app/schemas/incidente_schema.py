from pydantic import BaseModel
from decimal import Decimal


class IncidenteCreate(BaseModel):

    titulo: str

    descripcion: str

    direccion: str

    latitud: Decimal

    longitud: Decimal

    prioridad: str

    tipo_incidente_id: int



class IncidenteResponse(BaseModel):

    id: int

    titulo: str

    descripcion: str

    direccion: str

    latitud: Decimal

    longitud: Decimal

    prioridad: str

    estado_actual: str

    tipo_incidente_id: int

    class Config:
        from_attributes = True


class EstadoUpdate(BaseModel):

    estado: str

    observacion: str        

class IncidenteUpdate(BaseModel):

    titulo: str

    descripcion: str

    direccion: str

    latitud: Decimal

    longitud: Decimal

    prioridad: str

    tipo_incidente_id: int   

class HistorialEstadoResponse(BaseModel):

    id: int

    incidente_id: int

    estado: str

    observacion: str

    class Config:
        from_attributes = True

class EstadisticasResponse(BaseModel):

    total: int

    reportados: int

    en_proceso: int

    resueltos: int