import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticate } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/user/category/CreateCategoryController";

const router = Router();
// == user routes ==
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);

router.use(isAuthenticate);

router.get("/me", new DetailUserController().handle);

// == category routes ==

router.post("/category", new CreateCategoryController().handle);

export { router };
