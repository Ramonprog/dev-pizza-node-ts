import { ICreateProductDTO } from "../../DTO/ProductDTO";
import { ProductsRepository } from "../../repository/Products/ProductRepository";
import { CreateProductSchema } from "../../schemas/ProductSchema";

class CreateProductService {
  private readonly _createProductRepository: ProductsRepository;

  constructor() {
    this._createProductRepository = new ProductsRepository();
  }

  async execute({
    name,
    price,
    description,
    banner,
    category_id,
  }: ICreateProductDTO) {
    const validateSchema = CreateProductSchema.parse({
      name,
      price,
      description,
      banner,
      category_id,
    });

    if (!validateSchema) throw new Error("Preencha todos os campos");

    const product = await this._createProductRepository.createProduct({
      banner,
      category_id,
      description,
      name,
      price,
    });

    return product;
  }
}

export { CreateProductService };
