const { Schema, model } = require("mongoose");

const AlumnoSchema = Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  paterno: {
    type: String,
    required: [true, "El apellido paterno es obligatorio"],
  },
  materno: {
    type: String,
    required: [true, "El apellido materno es obligatorio"],
  },
  ci: {
    type: String,
    required: [true, "El carnet es obligatorio"],
  },
  edad: {
    type: String,
    required: [true, "la edad es obligatorio"],
  },
});

AlumnoSchema.methods.toJSON = function () {
  const { __v, _id, ...alumno } = this.toObject();
  alumno.uuid = _id;
  return alumno;
};

module.exports = model("Alumno", AlumnoSchema);
