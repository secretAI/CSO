import { Router } from "express";
import { Box, User } from "../models/models";
import { signup } from "../controllers/auth";

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

router.get("/login", (req, res) => {
  res.render("layouts/login", {
    pageTitle: "MySweetBox - Вход"
  });
});

router.post("/goods", async (req, res) => {
  // console.log(req.body);
  const response = await Box.findOne(req.body);
  return res.json(response);
});

router.post("/login", signup);

export default router;
