import { Router } from "express";
import { body } from "express-validator";
import { Auth } from "../controllers/auth";
import { Web } from "../controllers/web";

const router = Router();

router.get("/", (req, res) => {
  res.render("layouts/index", {
    pageTitle: "MySweetBox - Главная"
  });
});

router.get("/goods", (req, res) => {
  res.render("layouts/goods", {
    pageTitle: "MySweetBox - Каталог"
  });
});

router.get("/signup", (req, res) => {
  res.render("layouts/signup", {
    pageTitle: "MySweetBox - Регистрация"
  });
});

router.get("/login", (req, res) => {
  res.render("layouts/login", {
    pageTitle: "MySweetBox - Вход"
  });
});

router.post("/goods", Web.getProducts);

router.post("/signup", 
  body("email").isEmail(),
  body("password").isLength({min: 4, max: 32}),
  Auth.signUp);

router.post("/login", Auth.logIn);

router.post("/logout", Auth.logOut);

router.get("/activate/:link", Auth.activate);

router.get("/refresh", Auth.refresh);

router.get("/users", Auth.getUsers);

export default router;
