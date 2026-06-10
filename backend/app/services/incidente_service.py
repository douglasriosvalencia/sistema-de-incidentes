from datetime import datetime

from sqlalchemy.orm import Session

from app.models.incidente import Incidente
from app.models.historial_estado import HistorialEstado


class IncidenteService:

    # ==========================
    # CREAR
    # ==========================
    @staticmethod
    def crear_incidente(
        db: Session,
        data
    ):

        prioridades_validas = [
            "ALTA",
            "MEDIA",
            "BAJA"
        ]

        if data.prioridad not in prioridades_validas:
            return "prioridad_invalida"

        incidente = Incidente(
            titulo=data.titulo,
            descripcion=data.descripcion,
            direccion=data.direccion,
            latitud=data.latitud,
            longitud=data.longitud,
            prioridad=data.prioridad,
            estado_actual="REPORTADO",
            fecha_reporte=datetime.now(),
            tipo_incidente_id=data.tipo_incidente_id
        )

        db.add(incidente)
        db.commit()
        db.refresh(incidente)

        return incidente

    # ==========================
    # LISTAR TODOS
    # ==========================
    @staticmethod
    def obtener_incidentes(
        db: Session
    ):

        return db.query(
            Incidente
        ).all()

    # ==========================
    # BUSCAR POR ID
    # ==========================
    @staticmethod
    def obtener_incidente_por_id(
        db: Session,
        incidente_id: int
    ):

        return db.query(
            Incidente
        ).filter(
            Incidente.id == incidente_id
        ).first()

    # ==========================
    # ACTUALIZAR
    # ==========================
    @staticmethod
    def actualizar_incidente(
        db: Session,
        incidente_id: int,
        data
    ):

        prioridades_validas = [
            "ALTA",
            "MEDIA",
            "BAJA"
        ]

        if data.prioridad not in prioridades_validas:
            return "prioridad_invalida"

        incidente = db.query(
            Incidente
        ).filter(
            Incidente.id == incidente_id
        ).first()

        if not incidente:
            return None

        incidente.titulo = data.titulo
        incidente.descripcion = data.descripcion
        incidente.direccion = data.direccion
        incidente.latitud = data.latitud
        incidente.longitud = data.longitud
        incidente.prioridad = data.prioridad
        incidente.tipo_incidente_id = data.tipo_incidente_id

        db.commit()
        db.refresh(incidente)

        return incidente

    # ==========================
    # CAMBIAR ESTADO
    # ==========================
    @staticmethod
    def cambiar_estado(
        db: Session,
        incidente_id: int,
        data
    ):

        estados_validos = [
            "REPORTADO",
            "EN_PROCESO",
            "RESUELTO"
        ]

        if data.estado not in estados_validos:
            return "estado_invalido"

        incidente = db.query(
            Incidente
        ).filter(
            Incidente.id == incidente_id
        ).first()

        if not incidente:
            return None

        incidente.estado_actual = data.estado

        historial = HistorialEstado(
            incidente_id=incidente.id,
            estado=data.estado,
            observacion=data.observacion,
            fecha_cambio=datetime.now()
        )

        db.add(historial)

        db.commit()

        db.refresh(incidente)

        return incidente

    # ==========================
    # HISTORIAL
    # ==========================
    @staticmethod
    def obtener_historial(
        db: Session,
        incidente_id: int
    ):

        return db.query(
            HistorialEstado
        ).filter(
            HistorialEstado.incidente_id == incidente_id
        ).all()

    # ==========================
    # ELIMINAR
    # ==========================
    @staticmethod
    def eliminar_incidente(
        db: Session,
        incidente_id: int
    ):

        incidente = db.query(
            Incidente
        ).filter(
            Incidente.id == incidente_id
        ).first()

        if not incidente:
            return None

        db.delete(incidente)

        db.commit()

        return incidente
    
    # ==========================
    # FILTRAR POR ESTADO
    # ==========================
    @staticmethod
    def obtener_por_estado(
        db: Session,
        estado: str
    ):

        return db.query(
            Incidente
        ).filter(
            Incidente.estado_actual == estado
        ).all()
    # ==========================
    # FILTRAR POR PRIORIDAD
    # ==========================
    @staticmethod
    def obtener_por_prioridad(
        db: Session,
        prioridad: str
    ):

        return db.query(
            Incidente
        ).filter(
            Incidente.prioridad == prioridad
        ).all()
    # ==========================
    # ESTADISTICAS
    # ==========================
    @staticmethod
    def obtener_estadisticas(
        db: Session
    ):

        total = db.query(
            Incidente
        ).count()

        reportados = db.query(
            Incidente
        ).filter(
            Incidente.estado_actual == "REPORTADO"
        ).count()

        en_proceso = db.query(
            Incidente
        ).filter(
            Incidente.estado_actual == "EN_PROCESO"
        ).count()

        resueltos = db.query(
            Incidente
        ).filter(
            Incidente.estado_actual == "RESUELTO"
        ).count()

        return {
            "total": total,
            "reportados": reportados,
            "en_proceso": en_proceso,
            "resueltos": resueltos
        }