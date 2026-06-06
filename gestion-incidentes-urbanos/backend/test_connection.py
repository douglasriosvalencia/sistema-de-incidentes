from backend.app.config.database import engine

try:
    connection = engine.connect()

    print("Conexión exitosa a MySQL")

    connection.close()

except Exception as e:
    print("Error de conexión:")
    print(e)