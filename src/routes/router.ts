import { Router } from "express";
import { Auth } from "../controllers/auth";
import { getProducts } from "../controllers/getprods";

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

router.post("/goods", getProducts);

router.post("/signup", Auth.signUp);

export default router;
