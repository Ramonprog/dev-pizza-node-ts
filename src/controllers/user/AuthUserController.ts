import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";

class AuthUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const authService = await new AuthUserService().execute({
      email,
      password,
    });
    return res.json(authService);
  }
}
export { AuthUserController };
