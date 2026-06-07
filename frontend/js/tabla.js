<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta name="viewport"
        content="width=device-width, initial-scale=1.0">

    <title>
        Gestión de Incidentes Urbanos
    </title>

    <!-- Bootstrap -->
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet">

    <!-- Leaflet -->
    <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet/dist/leaflet.css" />

    <!-- CSS -->
    <link
        rel="stylesheet"
        href="css/styles.css">

</head>

<body>

    <div class="container mt-4">

        <h1 class="text-center mb-4">
            Gestión de Incidentes Urbanos
        </h1>

        <div class="row">

            <div class="col-md-3">
                <div class="card text-center">
                    <div class="card-body">

                        <h5>Total</h5>

                        <h2 id="total-incidentes">
                            0
                        </h2>

                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card text-center">
                    <div class="card-body">

                        <h5>Reportados</h5>

                        <h2 id="reportados">
                            0
                        </h2>

                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card text-center">
                    <div class="card-body">

                        <h5>En Proceso</h5>

                        <h2 id="en-proceso">
                            0
                        </h2>

                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card text-center">
                    <div class="card-body">

                        <h5>Resueltos</h5>

                        <h2 id="resueltos">
                            0
                        </h2>

                    </div>
                </div>
            </div>

        </div>

        <div class="mt-4">

            <h3>
                Mapa de Incidentes
            </h3>

            <div id="map"></div>

        </div>
        <div class="mt-5">

    <h3>
        Lista de Incidentes
    </h3>

    <table class="table table-striped">

        <thead>

            <tr>

                <th>ID</th>

                <th>Título</th>

                <th>Estado</th>

                <th>Prioridad</th>

            </tr>

        </thead>

        <tbody id="tabla-incidentes">

        </tbody>

    </table>

</div>

    </div>

    <!-- Leaflet -->
    <script
        src="https://unpkg.com/leaflet/dist/leaflet.js">
    </script>

    <!-- JS -->
    <script src="js/api.js"></script>

    <script src="js/dashboard.js"></script>

    <script src="js/map.js"></script>

</body>

</html>