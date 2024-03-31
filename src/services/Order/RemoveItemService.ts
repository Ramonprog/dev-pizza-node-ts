import { OrderRepository } from "../../repository/Order/OrderRepository";

class RemoveItemService {
  private readonly _RemoveItemRepository: OrderRepository;
  constructor() {
    this._RemoveItemRepository = new OrderRepository();
  }
  async execute(item_id: string) {
    if (!item_id) {
      throw new Error("item_id is required");
    }

    const item = await this._RemoveItemRepository.removeItem(item_id);

    return item;
  }
}

export { RemoveItemService };
