import { hash } from "bcryptjs";
import prismaClient from "../../prisma";

interface IUserRequestDTO {
  name: string;
  email: string;
  password: string;
}
class UserRepository {
  async create({ name, email, password }: IUserRequestDTO) {
    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }

  async findByEmail(email: string) {
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });
    return userAlreadyExists;
  }
}

export { UserRepository };
