const { Router } = require("express");
const router = Router();

const {
  asignaturaGet,
  asignaturaPost,
  asignaturaPut,
  asignaturaDelete,
} = require("../controllers/asignaturaController");

router.get("/", asignaturaGet);
router.post("/", asignaturaPost);
router.put("/:id", asignaturaPut);
router.delete("/:id", asignaturaDelete);
module.exports = router;
