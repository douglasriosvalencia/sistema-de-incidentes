console.log("Dashboard cargado");

async function cargarEstadisticas() {

    try {

        console.log("Consultando API...");

        const data =
            await obtenerEstadisticas();

        console.log("Respuesta API:", data);

        console.log(
            document.getElementById(
                "total-incidentes"
            )
        );

        document.getElementById(
            "total-incidentes"
        ).textContent = data.total;

        document.getElementById(
            "reportados"
        ).textContent = data.reportados;

        document.getElementById(
            "en-proceso"
        ).textContent = data.en_proceso;

        document.getElementById(
            "resueltos"
        ).textContent = data.resueltos;

        console.log("Tarjetas actualizadas");

    } catch (error) {

        console.error(
            "ERROR COMPLETO:",
            error
        );

    }

}

cargarEstadisticas();