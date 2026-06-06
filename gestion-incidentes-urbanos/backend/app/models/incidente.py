from sqlalchemy import (
    Column,
    BigInteger,
    String,
    Text,
    DateTime,
    ForeignKey,
    DECIMAL
)

#from sqlalchemy.orm import relationship

from backend.app.models.base import Base


class Incidente(Base):

    __tablename__ = "incidentes"

    id = Column(
        BigInteger,
        primary_key=True,
        autoincrement=True
    )

    titulo = Column(
        String(150),
        nullable=False
    )

    descripcion = Column(
        Text,
        nullable=False
    )

    direccion = Column(
        String(255),
        nullable=False
    )

    latitud = Column(
        DECIMAL(10, 8),
        nullable=False
    )

    longitud = Column(
        DECIMAL(11, 8),
        nullable=False
    )

    prioridad = Column(
        String(20),
        nullable=False
    )

    estado_actual = Column(
        String(30),
        nullable=False
    )

    fecha_reporte = Column(
        DateTime,
        nullable=False
    )

    tipo_incidente_id = Column(
        BigInteger,
        ForeignKey("tipos_incidente.id"),
        nullable=False
    )

    # tipo_incidente = relationship(
    #     "TipoIncidente"
    # )
