async function cargarTabla() {

    const incidentes =
        await obtenerIncidentes();

    const tabla =
        document.getElementById(
            "tabla-incidentes"
        );

    tabla.innerHTML = "";

    incidentes.forEach(
        incidente => {

            tabla.innerHTML += `
                <tr>

                    <td>${incidente.id}</td>

                    <td>${incidente.titulo}</td>

                    <td>${incidente.estado_actual}</td>

                    <td>${incidente.prioridad}</td>

                </tr>
            `;

        }
    );
}

cargarTabla();