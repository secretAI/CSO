import { Router } from "express";
import cors from "cors";
import { body } from "express-validator";
import { Auth } from "../controllers/auth";
import { Web } from "../controllers/web";
import { Private } from "../controllers/private";
import { authMiddleware } from "../middlewares/auth-middleware";

const router = Router();

router.use(cors({
  origin: "*",
  optionsSuccessStatus: 200
}));

router.get("/", (req, res) => {
  res.json({
    statusCode: 200,
    statusText: "handshake",
    from: "http://127.0.0.1:5050/api/"
  });
});

router.post("/signup", 
  body("email").isEmail(),
  body("password").isLength({min: 4, max: 20}),
  Auth.signUp);

router.post("/login", Auth.logIn);

router.post("/logout", Auth.logOut);

router.get("/activate/:link", Auth.activate);

router.get("/refresh", authMiddleware, Auth.refresh);

router.get("/users", authMiddleware, Private.getAllUsers);

router.post("/data/all", Web.getAllProducts);

router.post("/data/new", authMiddleware, Private.addNewProduct);

router.post("/data/modify", authMiddleware, Private.modifyProduct);

export default router;
