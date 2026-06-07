const map = L.map("map").setView(
    [4.5389, -75.6811],
    13
);

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution:
            "&copy; OpenStreetMap"
    }
).addTo(map);

async function cargarIncidentesMapa() {

    const incidentes =
        await obtenerIncidentes();

    incidentes.forEach(
        incidente => {

            L.marker([
                incidente.latitud,
                incidente.longitud
            ])
            .addTo(map)
            .bindPopup(`
                <b>${incidente.titulo}</b><br>
                Estado: ${incidente.estado_actual}<br>
                Prioridad: ${incidente.prioridad}
            `);

        }
    );
}

cargarIncidentesMapa();