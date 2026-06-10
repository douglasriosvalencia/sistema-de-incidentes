async function cargarIncidentes(url = "https://sistema-de-incidentes.onrender.com/api/incidentes") {

    const response =
        await fetch(url);

    const incidentes =
        await response.json();

    const tabla =
        document.getElementById(
            "tabla-incidentes"
        );

    tabla.innerHTML = "";

    incidentes.forEach(

        incidente => {

            let colorPrioridad =
                "secondary";

            if (
                incidente.prioridad === "ALTA"
            ) {
                colorPrioridad =
                    "danger";
            }

            if (
                incidente.prioridad === "MEDIA"
            ) {
                colorPrioridad =
                    "warning";
            }

            if (
                incidente.prioridad === "BAJA"
            ) {
                colorPrioridad =
                    "success";
            }

            let colorEstado =
                "secondary";

            if (
                incidente.estado_actual ===
                "EN_PROCESO"
            ) {
                colorEstado =
                    "primary";
            }

            if (
                incidente.estado_actual ===
                "RESUELTO"
            ) {
                colorEstado =
                    "success";
            }

            tabla.innerHTML += `

            <tr>

                <td>${incidente.id}</td>

                <td>${incidente.titulo}</td>

                <td>
                    <span class="badge bg-${colorPrioridad}">
                        ${incidente.prioridad}
                    </span>
                </td>

                <td>
                    <span class="badge bg-${colorEstado}">
                        ${incidente.estado_actual}
                    </span>
                </td>

                <td>

                    <a
                        href="detalle.html?id=${incidente.id}"
                        class="btn btn-info btn-sm">

                        Ver

                    </a>

                    <a
                        href="editar.html?id=${incidente.id}"
                        class="btn btn-warning btn-sm">

                        Editar

                    </a>

                </td>

            </tr>

            `;

        }

    );

}


document.getElementById(
    "btn-filtrar"
).addEventListener(

    "click",

    async function () {

        const estado =
            document.getElementById(
                "filtro-estado"
            ).value;

        const prioridad =
            document.getElementById(
                "filtro-prioridad"
            ).value;

        if (estado) {

            cargarIncidentes(
                `https://sistema-de-incidentes.onrender.com/api/incidentes/estado/${estado}`
            );

            return;
        }

        if (prioridad) {

            cargarIncidentes(
                `https://sistema-de-incidentes.onrender.com/api/incidentes/prioridad/${prioridad}`
            );

            return;
        }

        cargarIncidentes();

    }

);


cargarIncidentes();