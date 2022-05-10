const { Schema, model, default: mongoose } = require("mongoose");

const NotasSchema = Schema({
  alumno: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Alumno",
  },
  asignatura: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Asignatura",
  },
  notaA: {
    type: Number,
    required: [true, "La primera nota es obligatoria"],
  },
  periodo: {
    type: String,
    required: [true, "El periodo es obligatorio"],
  },
});

NotasSchema.methods.toJSON = function () {
  const { __v, _id, ...notas } = this.toObject();
  notas.uuid = _id;
  return notas;
};

module.exports = model("Nota", NotasSchema);
