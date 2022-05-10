const Nota = require("../models/notas");
const Alumno = require("../models/alumno");
const Asignatura = require("../models/asignaturas");
const alumno = require("../models/alumno");

const notaGet = async (req = request, res = response) => {
  const notas = await Nota.find().populate("alumno").populate("asignatura");
  res.status(200).json({ notas });
};

const notaPost = async (req = request, res = response) => {
  const { alumno, asignatura, notaA, periodo } = req.body;
  const nota = new Nota({ alumno, asignatura, notaA, periodo });
  await nota.save();
  res.status(200).json({ nota });
};

const notaPut = async (req = resquest, res = response) => {
  const { id } = req.params;
  const { notaA ,periodo } = req.body;

  await Nota.findByIdAndUpdate(id, { notaA,periodo });
  res.status(200).json({ msg: "Nota modificada con exito" });
};

const notaDelete = async (req = request, res = response) => {
  const { id } = req.params;
  await Nota.findByIdAndDelete(id);
  res.status(200).json({ msg: "Nota Eliminada con exito" });
};

module.exports = {
  notaGet,
  notaPost,
  notaPut,
  notaDelete,
};
