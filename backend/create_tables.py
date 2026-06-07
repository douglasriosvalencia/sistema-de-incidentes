from backend.app.config.database import engine

from backend.app.models.base import Base

# Importar modelos
from backend.app.models.tipo_incidente import TipoIncidente

from backend.app.models.incidente import Incidente

from backend.app.models.historial_estado import HistorialEstado


Base.metadata.create_all(bind=engine)

print("Tablas creadas correctamente")