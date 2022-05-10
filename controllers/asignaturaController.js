const { request, response } = require("express");
const Asignatura = require("../models/asignaturas");

const asignaturaGet = async (req = request, res = response) => {
  const asignaturas = await Asignatura.find();
  res.status(200).json({ asignaturas });
};

const asignaturaPost = async (req = request, res = response) => {
  const data = req.body;
  const asignatura = new Asignatura(data);
  await asignatura.save();
  res.status(200).json({ asignatura });
};

const asignaturaPut = async (req = request, res = response) => {
  const { id } = req.params;
  const data = req.body;

  const asignatura = await Asignatura.findByIdAndUpdate(id, data);
  res.status(200).json({ msg: "Asignatura modificada con exito" });
};

const asignaturaDelete = async (req = request, res = response) => {
  const { id } = req.params;
  const asignatura = await Asignatura.findByIdAndDelete(id);
  res.status(200).json({ msg: "Asignatura eliminada con exito" });
};

module.exports = {
  asignaturaGet,
  asignaturaPost,
  asignaturaPut,
  asignaturaDelete,
};
