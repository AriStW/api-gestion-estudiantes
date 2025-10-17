📚 API de Gestión de Estudiantes

Esta es una API RESTful construida con Node.js, Express y Mongoose para gestionar la información de estudiantes, incluyendo sus datos personales y los cursos en los que están matriculados.

🛠️ Tecnologías Utilizadas

Node.js

Express.js: Framework web para Node.js.

Mongoose: Modelado de objetos para MongoDB.

MongoDB Atlas: Base de datos NoSQL utilizada para el almacenamiento.

dotenv: Gestión de variables de entorno.
____________________________________________________________________________________________
Método  |   Ruta                            |   Función                                     |
____________________________________________________________________________________________
GET     |   /api/estudiantes                |Obtener todos los estudiantes.                 |
GET     |   /api/estudiantes/:id            |Obtener un estudiante por ID.                  |
GET     |   /api/estudiantes/filtrar/:curso |Obtener estudiantes por curso.                 |
POST    |   ,/api/estudiantes               |Crear un nuevo estudiante.                     |
PUT     |   api/estudiantes/:id             |Actualizar estudiante existente por ID.        |
DELETE  |   /api/estudiantes/:id            |Eliminar un estudiante por ID.                 |
____________________________________________________________________________________________|
NOTA:Debe contener valores del enumerador: "matematica", "historia", "ciencia", "arte".

Ejemplo de Petición POST:

{
  "nombre": "Elena",
  "apellido": "Rojas",
  "email": "elena.rojas@mail.com",
  "curso": ["historia", "arte"]
}
🔍 Ejemplo de Uso (Filtrar por Curso)
Para obtener todos los estudiantes inscritos en el curso "Física 101" (GET /api/estudiantes/filtrar/Física 101):

Citar al autor y mencionar los datos de colores en un archivo README.md es una excelente práctica para dar crédito y mejorar la documentación.

A continuación, te muestro cómo hacerlo de forma clara, utilizando formato Markdown para el README.md.

1. Citar al Autor y Contribuyentes
Generalmente se usa una sección dedicada al Autor y/o Contribuciones.

Opción 1: Sección simple de Autor
Markdown

## 👤 Autor

Desarrollado y mantenido por [Tu Nombre Completo](enlace-a-tu-perfil-o-web)
- **GitHub**: AriStW (https://github.com/AriStW)
- **LinkedIn**: [Sotomayor Ari Soledad](www.linkedin.com/in/arisoledadsotomayor) 

---