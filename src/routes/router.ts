import { Router } from "express";
import { Box } from "../models/model";

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

router.post("/goods", async (req, res) => {
  console.log(req.body);
  const response = await Box.findOne(req.body);
  return res.json(response);
});

export default router;
