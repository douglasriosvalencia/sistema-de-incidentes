alert("EDITAR.JS CARGADO");
const params =
    new URLSearchParams(
        window.location.search
    );

const incidenteId =
    params.get("id");


async function cargarIncidente() {

    const response =
        await fetch(
            `http://localhost:8000/api/incidentes/${incidenteId}`
        );

    const incidente =
        await response.json();

    document.getElementById(
        "titulo"
    ).value =
        incidente.titulo;

    document.getElementById(
        "descripcion"
    ).value =
        incidente.descripcion;

    document.getElementById(
        "direccion"
    ).value =
        incidente.direccion;

    document.getElementById(
        "prioridad"
    ).value =
        incidente.prioridad;

    document.getElementById(
        "estado"
    ).value =
        incidente.estado_actual;

}


document.getElementById(
    "form-editar"
).addEventListener(
    "submit",

    async function (e) {

        e.preventDefault();

        const responseOriginal =
            await fetch(
                `http://localhost:8000/api/incidentes/${incidenteId}`
            );

        const original =
            await responseOriginal.json();

        const incidente = {

            titulo:
                document.getElementById(
                    "titulo"
                ).value,

            descripcion:
                document.getElementById(
                    "descripcion"
                ).value,

            direccion:
                document.getElementById(
                    "direccion"
                ).value,

            latitud:
                original.latitud,

            longitud:
                original.longitud,

            prioridad:
                document.getElementById(
                    "prioridad"
                ).value,

            tipo_incidente_id:
                original.tipo_incidente_id

        };

        const response =
            await fetch(
                `http://localhost:8000/api/incidentes/${incidenteId}`,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify(
                            incidente
                        )
                }
            );

        if (response.ok) {

            alert(
                "Incidente actualizado correctamente"
            );

        }
        else {

            alert(
                "Error al actualizar"
            );

        }

    }

);


document.getElementById(
    "btn-estado"
).addEventListener(

    "click",

    async function () {

        console.log(
            "BOTON ESTADO FUNCIONA"
        );

        const estado = {

            estado:
                document.getElementById(
                    "estado"
                ).value,

            observacion:
                document.getElementById(
                    "observacion"
                ).value

        };

        console.log(
            estado
        );

        const response =
            await fetch(
                `http://localhost:8000/api/incidentes/${incidenteId}/estado`,
                {
                    method: "PATCH",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify(
                            estado
                        )
                }
            );

        console.log(
            "STATUS:",
            response.status
        );

        const data =
            await response.json();

        console.log(
            data
        );

        if (response.ok) {

            alert(
                "Estado actualizado correctamente"
            );

            cargarIncidente();

        }
        else {

            alert(
                "Error al actualizar estado"
            );

        }

    }

);

cargarIncidente();
