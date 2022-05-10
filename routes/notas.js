const { Router } = require("express");
const {
  notaGet,
  notaPost,
  notaDelete,
  notaPut,
} = require("../controllers/notaController");
const router = Router();

router.get("/", notaGet);
router.post("/", notaPost);
router.delete("/:id", notaDelete);
router.put("/:id", notaPut);

module.exports = router;
