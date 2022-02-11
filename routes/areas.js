const { Router } = require("express");
const { validarCampos } = require("../middlewares");
const { check } = require("express-validator");
const Area = require("../models/area");
const router = Router();

router.get("/", async (req, res) => {
  const area = await Area.findAll();
  res.json({
    ok: true,
    area
  });
});
module.exports = router;
