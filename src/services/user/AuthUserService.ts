import { compare } from "bcryptjs";
import { IAuthUserDTO } from "../../DTO/AuthUserDTO";
import { AuthRepository } from "../../repository/user/AuthRepository";
import { AuthSchema } from "../../schemas/UserSchema";

class AuthUserService {
  private readonly _AuthRepository;
  constructor() {
    this._AuthRepository = new AuthRepository();
  }
  async execute({ email, password }: IAuthUserDTO) {
    const validateAuth = AuthSchema.parse({ email, password });

    const findUser = await this._AuthRepository.findByEmail(email);

    if (!findUser) {
      throw new Error("Email or password incorrect");
    }

    const passwordMatch = await compare(password, findUser.password);

    if (!passwordMatch) {
      throw new Error("Email or password incorrect");
    }

    //gerar um jwt e devolver os dados do usuario logado

    return findUser;
  }
}

export { AuthUserService };
