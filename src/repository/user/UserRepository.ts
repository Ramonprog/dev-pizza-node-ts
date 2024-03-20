import prismaClient from "../../prisma";

interface IUserRequestDTO {
  name: string;
  email: string;
  password: string;
}
class UserRepository {
  async create({ name, email, password }: IUserRequestDTO) {
    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: password,
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
