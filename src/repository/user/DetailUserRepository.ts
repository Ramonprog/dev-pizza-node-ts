import prismaClient from "../../prisma";

class DetailUserRepository {
  async userDetail() {
    return { ok: true };
  }
}

export { DetailUserRepository };
