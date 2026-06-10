let map;
let marker;


// ==========================
// CARGAR TIPOS DE INCIDENTE
// ==========================
async function cargarTiposIncidente() {

    try {

        const response =
            await fetch(
                "https://sistema-de-incidentes.onrender.com/api/tipos-incidente"
            );

        const tipos =
            await response.json();

        const select =
            document.getElementById(
                "tipo-incidente"
            );

        tipos.forEach(tipo => {

            const option =
                document.createElement(
                    "option"
                );

            option.value =
                tipo.id;

            option.textContent =
                tipo.nombre;

            select.appendChild(
                option
            );

        });

    }
    catch (error) {

        console.error(error);

        alert(
            "No fue posible cargar los tipos de incidente."
        );

    }

}


// ==========================
// MAPA
// ==========================
function iniciarMapa() {

    map =
        L.map("map");

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution:
                "&copy; OpenStreetMap"
        }
    ).addTo(map);

    navigator.geolocation.getCurrentPosition(

        function (position) {

            const lat =
                position.coords.latitude;

            const lng =
                position.coords.longitude;

            map.setView(
                [lat, lng],
                15
            );

            marker =
                L.marker(
                    [lat, lng]
                ).addTo(map);

            document.getElementById(
                "latitud"
            ).value = lat;

            document.getElementById(
                "longitud"
            ).value = lng;

        },

        function () {

            map.setView(
                [4.5339, -75.6811],
                13
            );

        }

    );

    map.on(
        "click",
        function (e) {

            const lat =
                e.latlng.lat;

            const lng =
                e.latlng.lng;

            document.getElementById(
                "latitud"
            ).value = lat;

            document.getElementById(
                "longitud"
            ).value = lng;

            if (marker) {

                map.removeLayer(
                    marker
                );

            }

            marker =
                L.marker(
                    [lat, lng]
                ).addTo(map);

            map.panTo(
                [lat, lng]
            );

        }
    );

}


// ==========================
// GUARDAR INCIDENTE
// ==========================
document.getElementById(
    "form-incidente"
).addEventListener(

    "submit",

    async function (e) {

        e.preventDefault();

        const latitud =
            document.getElementById(
                "latitud"
            ).value;

        const longitud =
            document.getElementById(
                "longitud"
            ).value;

        if (!latitud || !longitud) {

            alert(
                "Seleccione una ubicación en el mapa."
            );

            return;

        }

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
                parseFloat(
                    latitud
                ),

            longitud:
                parseFloat(
                    longitud
                ),

            prioridad:
                document.getElementById(
                    "prioridad"
                ).value,

            tipo_incidente_id:
                parseInt(
                    document.getElementById(
                        "tipo-incidente"
                    ).value
                )

        };

        try {

            const response =
                await fetch(
                    "https://sistema-de-incidentes.onrender.com/api/incidentes",
                    {
                        method: "POST",

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
                    "Incidente registrado correctamente"
                );

                window.location.href =
                    "index.html";

            }
            else {

                const error =
                    await response.json();

                console.error(
                    error
                );

                alert(
                    "Error al registrar incidente"
                );

            }

        }
        catch (error) {

            console.error(
                error
            );

            alert(
                "No fue posible conectar con el servidor."
            );

        }

    }

);


// ==========================
// INICIO
// ==========================
cargarTiposIncidente();

iniciarMapa();