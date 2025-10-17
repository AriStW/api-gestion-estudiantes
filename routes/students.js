const express = require('express');
const router = express.Router();
const student = require('../models/student');
const { param } = require('express/lib/application');

//listar estudiantes
router.get('/estudiantes', async (req, res) => {
try {
const students = await student.find();
res.status(200).send(students);
} catch (e) {
res.status(500).send({ Mensaje: 'Error al obtener listado de estudiante', error: e.message }); // Añadido .message para mejor logging
}
});
//listar estudiante por id
router.get('/estudiantes/:id', async (req, res) => {
    try {
        const students = await student.findById(req.params.id);
        if (!students) {
            return res.status(404).send({ Mensaje: 'Error: el estudiante no existe o no esta definido', error });
        }
        res.status(200).send(students);
    } catch (error) {
        res.status(500).send({ Mensaje: 'Error al obtener estudiante', error });

    }
});

//crear nuevo estudiante
router.post('/estudiantes', async (req, res) => {
    const body = req.body;
    try {
        const newStudents = await student.create(body);
        res.status(201).send(newStudents);
    } catch (error) {
        res.status(400).send(error);
    }
});

//modificar datos por id
router.put('/estudiantes/:id', async (req, res) => {
    const body = req.body;
    try {
        const studentUpdata = await student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!studentUpdata) {
            return res.status(404).send({ Mensaje: 'Error: estudiante no actualizado', error });
        }
        res.status(200).send(studentUpdata);
    } catch (e) {
        res.status(400).send({ Mensaje: 'Error al actualizar estudiante', e });
    }
});
//eliminar estudiante por id
router.delete('/estudiantes/:id', async (req, res) => {
    try {
        const studentRemoved = await student.findByIdAndDelete(req.params.id);
        if (!studentRemoved) {
            return res.status(404).send({ Mensaje: 'Error estudiante no encontrado', error });
        }
        res.status(200).send({ Mensaje: 'Estudiante eliminado correctamente', error });
        
    } catch (error) {
        res.status(500).send({ Mensaje: 'Error al eliminar estudiante. Verifique el formato del ID.', error: error.message });
    }
});
//Filtrar estudiantes por curso
router.get('/estudiantes/filtrar/:curso', async (req, res) => {
  try {
    const courseSend = req.params.curso;  
     const studentFiltered = await student.find({ curso: { $in: [courseSend] } });

    if (studentFiltered.length === 0) {
      return res.status(404).send({ mensaje: 'No se encontraron estudiantes para ese curso' });
    }

    res.status(200).send(studentFiltered);
  } catch (error) {
    res.status(500).send({ mensaje: 'Error al obtener estudiantes', error: error.toString() });
  }
});
module.exports = router;
