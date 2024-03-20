import prismaClient from "../../prisma";
import { UserSchema } from "../../schemas/UserSchema";

interface IUserRequestDTO {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: IUserRequestDTO) {
    try {
      const validatedUser = UserSchema.parse({ name, email, password });

      const userAlreadyExists = await prismaClient.user.findFirst({
        where: {
          email: email,
        },
      });

      if (userAlreadyExists) {
        throw new Error("User already exists");
      }

      const user = await prismaClient.user.create({
        data: validatedUser,
        select: {
          id: true,
          name: true,
          email: true,
        },
      });

      return { user };
    } catch (error) {
      throw error;
    }
  }
}

export { CreateUserService };
