import { Router } from "express";
//multer
import multer from "multer";
import uploadConfig from "./config/multer";
//routes
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticate } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/products/CreateProductController";
import { ListProductByCategory } from "./controllers/products/ListProductByCategoryController";

const router = Router();

const upload = multer(uploadConfig.upload("./temp"));
// == user routes ==
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);

router.use(isAuthenticate);

router.get("/me", new DetailUserController().handle);

// == category routes ==

router.post("/category", new CreateCategoryController().handle);
router.get("/category", new ListCategoryController().handle);

// == product routes ==

router.post(
  "/product",
  upload.single("file"),
  new CreateProductController().handle
);

router.get("/products", new ListProductByCategory().handle);
export { router };
