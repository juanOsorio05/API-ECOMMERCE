const express = require("express");
const productoController = require("../controllers/productosController");
const router = express.Router();

router.get("/", productoController.listarProductos);
router.get("/:id", productoController.obtenerProductoPorId);
router.post("/", productoController.agregarProducto);
router.put("/:id", productoController.actualizarProducto);
router.delete("/:id", productoController.eliminarProducto);

module.exports = router;
