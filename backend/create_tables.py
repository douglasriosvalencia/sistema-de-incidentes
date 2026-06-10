from app.config.database import engine

from app.models.base import Base

# Importar modelos
from app.models.tipo_incidente import TipoIncidente

from app.models.incidente import Incidente

from app.models.historial_estado import HistorialEstado


Base.metadata.create_all(bind=engine)

print("Tablas creadas correctamente")