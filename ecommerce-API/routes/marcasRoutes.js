const express = require("express");
const marcaController = require("../controllers/marcascontroller");
const router = express.Router();

router.get("/", marcaController.listarMarcas);
router.get("/:id", marcaController.obtenerMarcaPorId);
router.post("/", marcaController.agregarMarca);
router.put("/:id", marcaController.actualizarMarca);
router.delete("/:id", marcaController.eliminarMarca);

module.exports = router;