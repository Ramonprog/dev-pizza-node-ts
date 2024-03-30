import { ICreateProductDTO } from "../../DTO/ProductDTO";
import prismaClient from "../../prisma";

class ProductsRepository {
  async createProduct({
    banner,
    category_id,
    description,
    name,
    price,
  }: ICreateProductDTO) {
    const product = await prismaClient.product.create({
      data: {
        name,
        banner,
        category_id,
        description,
        price,
      },
    });

    return product;
  }
}

export { ProductsRepository };
