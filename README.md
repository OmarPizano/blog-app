# blog

Prototipo de un blog con Node.js y MongoDB.

Estado:

- [X] API Backend
- [ ] Frontend

## Modo de uso

Descargar el repositorio
```bash
git clone https://github.com/OmarPizano/blog-app
```

Crear un archivo `.env`:
```
MONGO_URI=mongodb://XXXX/XXXX
NODE_PORT=XXXX
CLOUDINARY_NAME=XXXX
CLOUDINARY_KEY=XXXX
CLOUDINARY_SECRET=XXXX
```

Iniciar el servicio
```bash
docker compose up -d
# o usando Makefile
make start
```

Parar el servicio
```bash
docker compose down
# o usando Makefile
make stop
```

Test HTTP requests usando `curl`.
```bash
# obtener todos los posts
curl 127.0.0.1 -X GET
# obtener post específico por su ID
curl 127.0.0.1/xHa8IP -X GET
# crear un nuevo post (sin imagen)
curl 127.0.0.1 -X POST -d 'title=Mi nuevo post&content=Contenido de mi primer post'
# crear un nuevo post (sin imagen, JSON)
curl 127.0.0.1 -X POST -H 'content-type: "application/json"' -d '{"title": "Mi nuevo post", "content": "Contenido del primer post"}'
# crear un nuevo post (con imagen, multipart form)
curl 127.0.0.1 -X POST -F title="Mi primer post" -F content="Contenido del primer post" -F image@/path/to/image.png
# eliminar post
curl 127.0.0.1/xHa8IP -X DELETE
# editar post completo (multipart)
curl 127.0.0.1 -X PUT -F title="Mi nuevo titulo" -F content="Mi nuevo contenido" -F image@/path/to/new_image.png
# editar sólo un campo (json y multupart)
curl 127.0.0.1 -X PUT -F title="Mi nuevo titulo"
curl 127.0.0.1 -X PUT -F image=@/path/to/new_image.png
```

## Changelog

- **24/03/2023**: *Soporte para Cloudinary: editar imágen*
- **23/03/2023**: *Soporte para Cloudinary: subir y eliminar imágenes*
- **15/03/2023**: *Agregar operaciones CRUD*
	- Agregar funciones básicas de CRUD para los posts.
	- Responses en formato JSON.
- **14/03/2023**: *Inicio del proyecto*
	- Estructura de directorios del proyecto.
	- Pruebas de funcionamiento.
