const express = require("express");
const usuarioController = require("../controllers/usuariosController");
const router = express.Router();

router.get("/", usuarioController.listarUsuarios);
router.get("/:id", usuarioController.obtenerUsuarioPorId);
router.post("/", usuarioController.agregarUsuario);
router.put("/:id", usuarioController.actualizarUsuario);
router.delete("/:id", usuarioController.eliminarUsuario);

module.exports = router;