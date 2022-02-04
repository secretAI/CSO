import { Router } from "express";
import { Box } from "../models/model";

const router = Router();

router.get("/", (req, res) => {
  res.render("layouts/index", {
    pageTitle: "MySweetBox - Главная"
  });
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const response = await Box.findOne(req.body);
  console.log(response.title, response.count);
  return res.json(response);
});

export default router;
