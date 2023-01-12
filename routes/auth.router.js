const { Router } = require("express");

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const { authMiddleware } = require("../middlewares");
const { authController } = require("../controllers");
const router = Router();

router.post(
  "/register",
  jsonParser,
  authMiddleware.isLoginDataValid,
  authMiddleware.hashPassword,
  authController.register
);

router.post("/login", authController.login);
module.exports = router;
