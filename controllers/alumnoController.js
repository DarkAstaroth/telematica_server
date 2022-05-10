const { findByIdAndDelete } = require("../models/alumno");
const Alumno = require("../models/alumno");

const alumnoGet = async (req = request, res = response) => {
  const alumnos = await Alumno.find();
  res.status(200).json({ alumnos });
};

const alumnoPost = async (req = request, res = response) => {
  const { nombre, paterno, materno, ci, edad } = req.body;
  const alumno = new Alumno({ nombre, paterno, materno, ci, edad });
  await alumno.save();
  res.status(200).json({ alumno });
};

const alumnoPut = async (req = resquest, res = response) => {
  const { id } = req.params;
  const { nombre } = req.body;

  const alumno = await Alumno.findByIdAndUpdate(id, { nombre });
  res.status(200).json({ msg: "Alumno modificado con exito" });
};

const alumnoDelete = async (req = request, res = response) => {
  const { id } = req.params;

  const alumno = await Alumno.findByIdAndDelete({ _id: id });
  res.status(200).json({ msg: "Alumno Eliminado con exito" });
};

module.exports = { alumnoGet, alumnoPost, alumnoPut, alumnoDelete };
