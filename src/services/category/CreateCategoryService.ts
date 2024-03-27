import { ICreateCategoryDTO } from "../../DTO/CreateCategoryDTO";
import { CreateCategoryRepository } from "../../repository/category/CreateCategoryRepository";
import { CategorySchema } from "../../schemas/CategorySchema";

class CreateCategoryService {
  private readonly _createCategoryRepository: CreateCategoryRepository;
  constructor() {
    this._createCategoryRepository = new CreateCategoryRepository();
  }

  async execute({ name }: ICreateCategoryDTO) {
    const validateCategory = CategorySchema.parse({ name });

    if (!validateCategory) {
      throw new Error("name invalid");
    }

    const category = await this._createCategoryRepository.createUser({ name });

    return category;
  }
}

export { CreateCategoryService };
