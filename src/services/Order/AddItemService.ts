import { IAddItem } from "../../DTO/OrderDTO";
import { OrderRepository } from "../../repository/Order/OrderRepository";

class AddItemService {
  private readonly _AddItemRepository: OrderRepository;
  constructor() {
    this._AddItemRepository = new OrderRepository();
  }
  async execute({ amount, order_id, product_id }: IAddItem) {
    const order = await this._AddItemRepository.addItem({
      amount,
      order_id,
      product_id,
    });
    return order;
  }
}

export { AddItemService };
