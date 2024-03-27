import { ICreateCategoryDTO } from "../../DTO/CreateCategoryDTO";
import prismaClient from "../../prisma";

class CreateCategoryRepository {
  async createUser({ name }: ICreateCategoryDTO) {
    const category = await prismaClient.category.create({
      data: {
        name,
      },
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  }
}

export { CreateCategoryRepository };
