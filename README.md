# Gestión de Incidentes Urbanos

Sistema web para el registro y seguimiento de incidentes urbanos reportados por la ciudadanía.

## Tecnologías Utilizadas

### Backend

* FastAPI
* SQLAlchemy
* MySQL
* Python 3.12

### Frontend

* HTML5
* CSS3
* JavaScript
* Bootstrap 5
* Leaflet

### DevOps

* Docker
* Docker Compose

---

## Funcionalidades

### Incidentes

* Crear incidente
* Listar incidentes
* Consultar incidente por ID
* Actualizar incidente
* Cambiar estado
* Consultar historial de estados
* Filtrar por estado
* Filtrar por prioridad

### Estadísticas

* Total de incidentes
* Incidentes reportados
* Incidentes en proceso
* Incidentes resueltos

---

## Estados Permitidos

* REPORTADO
* EN_PROCESO
* RESUELTO

---

## Prioridades Permitidas

* ALTA
* MEDIA
* BAJA

---

## Ejecución del Proyecto

Instalar dependencias:

pip install -r requirements.txt

Ejecutar servidor:

uvicorn backend.main:app --reload

---

## Documentación Swagger

http://localhost:8000/docs

---

## Health Check

http://localhost:8000/health

---

## Autor

Proyecto académico - Gestión de Incidentes Urbanos