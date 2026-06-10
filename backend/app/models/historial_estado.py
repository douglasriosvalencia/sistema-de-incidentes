from sqlalchemy import (
    Column,
    BigInteger,
    String,
    Text,
    DateTime,
    ForeignKey
)

#from sqlalchemy.orm import relationship

from app.models.base import Base


class HistorialEstado(Base):

    __tablename__ = "historial_estados"

    id = Column(
        BigInteger,
        primary_key=True,
        autoincrement=True
    )

    incidente_id = Column(
        BigInteger,
        ForeignKey("incidentes.id"),
        nullable=False
    )

    estado = Column(
        String(30),
        nullable=False
    )

    observacion = Column(
        Text
    )

    fecha_cambio = Column(
        DateTime,
        nullable=False
    )

    #incidente = relationship(
     #   "Incidente"
    #)