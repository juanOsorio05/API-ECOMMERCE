const express = require("express");
const ventaController = require("../controllers/ventascontroller");
const router = express.Router();

router.get("/", ventaController.listarVentas);
router.get("/:id", ventaController.obtenerVentaPorId);
router.post("/", ventaController.agregarVenta);
router.put("/:id", ventaController.actualizarVenta);
router.delete("/:id", ventaController.eliminarVenta);

module.exports = router;
