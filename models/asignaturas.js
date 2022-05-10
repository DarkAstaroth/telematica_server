const { Schema, model } = require("mongoose");

const AsignaturaSchema = Schema({
  nombre: {
    type: String,
    required: [true, "El nombre de la asignatura es obligatorio"],
  },
  profesor: {
    type: String,
    required: [true, "El nombre del profesor es obligatorio"],
  },
  cupos: {
    type: String,
    required: [true, "Los cupos son necesarios"],
  },
  aula: {
    type: String,
    required: [true, "Las aulas son necesarias"],
  },
});

AsignaturaSchema.methods.toJSON = function () {
  const { __v, _id, ...asignatura } = this.toObject();
  asignatura.uuid = _id;
  return asignatura;
};

module.exports = model("Asignatura", AsignaturaSchema);
