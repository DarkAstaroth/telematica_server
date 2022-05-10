const { Router } = require("express");
const router = Router();
const {
  alumnoGet,
  alumnoPost,
  alumnoPut,
  alumnoDelete,
} = require("../controllers/alumnoController");

router.get("/", alumnoGet);
router.post("/", alumnoPost);
router.put("/:id", alumnoPut);
router.delete("/:id", alumnoDelete);

module.exports = router;
