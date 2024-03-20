import { UserRepository } from "../../repository/user/UserRepository";
import { UserSchema } from "../../schemas/UserSchema";
import { User } from "@prisma/client";

type UserInput = Omit<User, "created_at" | "updated_at" | "id">;
class CreateUserService {
  private readonly _userRepository;

  constructor() {
    this._userRepository = new UserRepository();
  }
  async execute({ name, email, password }: UserInput) {
    try {
      const validatedUser = UserSchema.parse({ name, email, password });

      const userAlreadyExists = await this._userRepository.findByEmail(email);

      if (userAlreadyExists) {
        throw new Error("User already exists");
      }

      const user = await this._userRepository.create(validatedUser);

      return { user };
    } catch (error) {
      throw error;
    }
  }
}

export { CreateUserService };
