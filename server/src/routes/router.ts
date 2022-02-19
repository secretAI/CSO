import { Router } from "express";
import { body } from "express-validator";
import { Auth } from "../controllers/auth";
import { Web } from "../controllers/web";
import { authMiddleware } from "../middlewares/auth-middleware";

const router = Router();

router.post("/goods", Web.getProducts);

router.post("/signup", 
  body("email").isEmail(),
  body("password").isLength({min: 4, max: 20}),
  Auth.signUp);

router.post("/login", Auth.logIn);

router.post("/logout", Auth.logOut);

router.get("/activate/:link", Auth.activate);

router.get("/refresh", Auth.refresh);

router.get("/users", authMiddleware, Auth.getUsers);

export default router;
