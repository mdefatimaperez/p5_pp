const express = require("express");

//UNA INSTANCIA PARA MANEJAR RUTAS
const router = express.Router();

//RUTAS
router.get("/", (req, res) => {
  console.log("BODY-->", req.body);
  console.log("PARAMS-->", req.params);

  const banda = req.body.banda;
  const cancion = req.body.cancion;

  // res.status(200).send("La cancion "+ cancion + " De la banda "+ banda + "Fue agregada correctamente a la DB")
  res.status(200).send("RUTA EJECUTADA CORRECTAMENTE");
});

router.get("/users", (req, res) => {
  res.status(200).send(usuarios);
});

router.get("/users/:uid", (req, res) => {
  console.log(req.params);
  const uid = req.params.uid;

  const usuarioFiltrado = usuarios.filter((usuario) => usuario.uid === uid);

  res.status(200).send(usuarioFiltrado);
});

router.get("/products", (req, res) => {
  res.status(200).send("Hasta luego!");
});

module.exports = router;

router.get("/users", (req, res) => {
  res.status(200).send(usuarios);
});
