import prismaClient from "../../prisma";

class ListCategoryRepository {
  async getListCategory() {
    const category = await prismaClient.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  }
}

export { ListCategoryRepository };
