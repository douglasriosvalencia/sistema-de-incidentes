const params =
    new URLSearchParams(
        window.location.search
    );

const incidenteId =
    params.get("id");


async function cargarDetalle() {

    const response =
        await fetch(
            `https://sistema-de-incidentes.onrender.com/api/incidentes/${incidenteId}`
        );

    const incidente =
        await response.json();

    const detalle =
        document.getElementById(
            "detalle"
        );

    detalle.innerHTML = `

        <div class="card-body">

            <h4>
                ${incidente.titulo}
            </h4>

            <hr>

            <p>
                <strong>Descripción:</strong><br>
                ${incidente.descripcion}
            </p>

            <p>
                <strong>Dirección:</strong>
                ${incidente.direccion}
            </p>

            <p>
                <strong>Prioridad:</strong>
                ${incidente.prioridad}
            </p>

            <p>
                <strong>Estado Actual:</strong>
                ${incidente.estado_actual}
            </p>

            <p>
                <strong>Latitud:</strong>
                ${incidente.latitud}
            </p>

            <p>
                <strong>Longitud:</strong>
                ${incidente.longitud}
            </p>

        </div>

    `;

}


async function cargarHistorial() {

    const response =
        await fetch(
            `https://sistema-de-incidentes.onrender.com/api/incidentes/${incidenteId}/historial`
        );

    const historial =
        await response.json();

    const lista =
        document.getElementById(
            "historial"
        );

    lista.innerHTML = "";

    if (historial.length === 0) {

        lista.innerHTML = `

            <li class="list-group-item">

                No hay historial registrado.

            </li>

        `;

        return;

    }

    historial.forEach(

        item => {

            const fecha =
                new Date(
                    item.fecha_cambio
                ).toLocaleString();

            lista.innerHTML += `

            <li class="list-group-item">

                <h6>

                    Estado:
                    ${item.estado}

                </h6>

                <p>

                    <strong>Observación:</strong>

                    ${item.observacion || "Sin observación"}

                </p>

                <small class="text-muted">

                    ${fecha}

                </small>

            </li>

            `;

        }

    );

}


cargarDetalle();

cargarHistorial();