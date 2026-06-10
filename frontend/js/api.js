const API_URL =
    "https://sistema-de-incidentes.onrender.com/api";


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