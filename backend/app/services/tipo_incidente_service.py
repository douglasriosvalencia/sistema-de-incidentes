from sqlalchemy.orm import Session

from app.models.tipo_incidente import TipoIncidente


class TipoIncidenteService:

    @staticmethod
    def obtener_tipos(
        db: Session
    ):

        return db.query(
            TipoIncidente
        ).all()