from sqlalchemy import Column, BigInteger, String

from backend.app.models.base import Base


class TipoIncidente(Base):

    __tablename__ = "tipos_incidente"

    id = Column(
        BigInteger,
        primary_key=True,
        autoincrement=True
    )

    nombre = Column(
        String(100),
        nullable=False
    )

    descripcion = Column(
        String(255)
    )
    