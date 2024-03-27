import { ListCategoryRepository } from "../../repository/category/ListCategoryRepository";

class ListCategoryService {
  private readonly _ListCategoryRepository: ListCategoryRepository;
  constructor() {
    this._ListCategoryRepository = new ListCategoryRepository();
  }
  async execute() {
    const category = await this._ListCategoryRepository.getListCategory();
    return category;
  }
}

export { ListCategoryService };
