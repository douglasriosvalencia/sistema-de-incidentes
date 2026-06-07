const API_URL =
    "http://localhost:8000/api";


async function obtenerEstadisticas() {

    const response = await fetch(
        `${API_URL}/incidentes/estadisticas`
    );

    return await response.json();
}


async function obtenerIncidentes() {

    const response = await fetch(
        `${API_URL}/incidentes`
    );

    return await response.json();
}