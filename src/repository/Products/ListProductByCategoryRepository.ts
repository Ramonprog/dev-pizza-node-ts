import prismaClient from "../../prisma";

class ListProductByCategoryRepository {
  async findCategory(category_id: string) {
    const category = await prismaClient.category.findUnique({
      where: {
        id: category_id,
      },
      select: {
        products: true,
      },
    });

    return category;
  }
}

export { ListProductByCategoryRepository };
