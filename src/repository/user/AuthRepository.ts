import prismaClient from "../../prisma";

class AuthRepository {
  async findByEmail(email: string) {
    try {
      const findUser = await prismaClient.user.findFirst({
        where: {
          email: email,
        },
      });

      return findUser;
    } catch (error) {
      console.error("Erro ao buscar usuário por e-mail:", error);
      throw error;
    }
  }
}

export { AuthRepository };
