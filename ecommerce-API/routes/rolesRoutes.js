const express = require("express");
const rolController = require("../controllers/rolesCrontoller");
const router = express.Router();

router.get("/", rolController.listarRoles);
router.get("/:id", rolController.obtenerRolPorId);
router.post("/", rolController.agregarRol);
router.put("/:id", rolController.actualizarRol);
router.delete("/:id", rolController.eliminarRol);

module.exports = router;