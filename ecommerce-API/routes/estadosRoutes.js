const express = require("express");
const estadoController = require("../controllers/estadosController");
const router = express.Router();

router.get("/", estadoController.listarEstados);
router.get("/:id", estadoController.obtenerEstadoPorId);
router.post("/", estadoController.agregarEstado);
router.put("/:id", estadoController.actualizarEstado);
router.delete("/:id", estadoController.eliminarEstado);

module.exports = router;
