console.log("Dashboard cargado");

let grafica = null;

async function cargarEstadisticas() {

    try {

        const data =
            await obtenerEstadisticas();

        document.getElementById(
            "total-incidentes"
        ).textContent =
            data.total;

        document.getElementById(
            "reportados"
        ).textContent =
            data.reportados;

        document.getElementById(
            "en-proceso"
        ).textContent =
            data.en_proceso;

        document.getElementById(
            "resueltos"
        ).textContent =
            data.resueltos;

        crearGrafica(data);

    }

    catch (error) {

        console.error(
            "Error cargando estadísticas:",
            error
        );

    }

}


function crearGrafica(data) {

    const ctx =
        document.getElementById(
            "graficaEstados"
        ).getContext("2d");

    if (grafica) {

        grafica.destroy();

    }

    grafica =
        new Chart(ctx, {

            type: "bar",

            data: {

                labels: [

                    "Reportados",

                    "En Proceso",

                    "Resueltos"

                ],

                datasets: [

                    {

                        label:
                            "Cantidad",

                        data: [

                            data.reportados,

                            data.en_proceso,

                            data.resueltos

                        ],

                        backgroundColor: [

                            "#ffc107",

                            "#0d6efd",

                            "#198754"

                        ]

                    }

                ]

            },

            options: {

                responsive: true,

                plugins: {

                    legend: {

                        display: false

                    }

                },

                scales: {

                    y: {

                        beginAtZero: true,

                        ticks: {

                            precision: 0

                        }

                    }

                }

            }

        });

}


cargarEstadisticas();