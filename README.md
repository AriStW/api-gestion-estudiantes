📚 API de Gestión de Estudiantes
---

Esta es una API RESTful construida con Node.js, Express y Mongoose para gestionar la información de estudiantes, incluyendo sus datos personales y los cursos en los que están matriculados.

🛠️ Tecnologías Utilizadas
---
- Node.js

- Express.js: Framework web para Node.js.

- Mongoose: Modelado de objetos para MongoDB.

- ongoDB Atlas: Base de datos NoSQL utilizada para el almacenamiento.

- dotenv: Gestión de variables de entorno.

📌LISTA DE ENDPOINS
____________________________________________________________________________________________
Método  |   Ruta                            |   Función                                     |
____________________________________________________________________________________________
GET     |   /api/estudiantes                |Obtener todos los estudiantes.                 |
____________________________________________________________________________________________
GET     |   /api/estudiantes/:id            |Obtener un estudiante por ID.                  |
____________________________________________________________________________________________
GET     |   /api/estudiantes/filtrar/:curso |Obtener estudiantes por curso.                 |
____________________________________________________________________________________________
POST    |   ,/api/estudiantes               |Crear un nuevo estudiante.                     |
____________________________________________________________________________________________
PUT     |   api/estudiantes/:id             |Actualizar estudiante existente por ID.        |
____________________________________________________________________________________________
DELETE  |   /api/estudiantes/:id            |Eliminar un estudiante por ID.                 |
____________________________________________________________________________________________

NOTA:Debe contener valores del enumerador: "matematica", "historia", "ciencia", "arte".

<<<<<<< HEAD
## Enlace a vercel
https://api-gestion-estudiantes.vercel.app/api/estudiantes

Ejemplo de Petición POST:

=======
🔍🔍Ejemplo de Petición POST:
---
>>>>>>> 94586bfcf8eb161cdbf54721750455051bf06398
{
  "nombre": "Elena",
  "apellido": "Rojas",
  "email": "elena.rojas@mail.com",
  "curso": ["historia", "arte"]
}
<<<<<<< HEAD
🔍 Ejemplo de Uso (Filtrar por Curso)
Para obtener todos los estudiantes inscritos en el curso "arte" (GET https://api-gestion-estudiantes.vercel.app/api/estudiantes/filtrar/arte):

## 👤 Autor

- **GitHub**: AriStW (https://github.com/AriStW)
- **LinkedIn**: [Sotomayor Ari Soledad](www.linkedin.com/in/arisoledadsotomayor) 

=======

-> Ejemplo de Uso(Filtrar por Curso)

Para obtener todos los estudiantes inscritos en el curso "Física" (GET /api/estudiantes/filtrar/Física):

## 👤 Autor

Desarrollado y mantenido por Sotomayor Ari
- **GitHub**: AriStW (https://github.com/AriStW)
- **LinkedIn**: [Sotomayor Ari Soledad](www.linkedin.com/in/arisoledadsotomayor) 

---
>>>>>>> 94586bfcf8eb161cdbf54721750455051bf06398
