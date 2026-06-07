from pydantic import BaseModel


class TipoIncidenteResponse(BaseModel):

    id: int

    nombre: str

    descripcion: str | None = None

    class Config:
        from_attributes = True