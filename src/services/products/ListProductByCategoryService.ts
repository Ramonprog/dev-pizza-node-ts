import { ListProductByCategoryRepository } from "../../repository/Products/ListProductByCategoryRepository";

class ListProductByCategoryService {
  private readonly _lisProductByCategoryRepository: ListProductByCategoryRepository;
  constructor() {
    this._lisProductByCategoryRepository =
      new ListProductByCategoryRepository();
  }

  async execute(category_id: string) {
    if (!category_id) {
      throw new Error("Category id is required");
    }

    const productList = await this._lisProductByCategoryRepository.findCategory(
      category_id
    );
    return productList;
  }
}

export { ListProductByCategoryService };
