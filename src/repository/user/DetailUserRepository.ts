import prismaClient from "../../prisma";

interface IPropsDTO {
  user_id: string;
}
class DetailUserRepository {
  async userDetail({ user_id }: IPropsDTO) {
    const userDetail = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    return userDetail;
  }
}

export { DetailUserRepository };
