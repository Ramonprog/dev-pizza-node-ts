import { OrderRepository } from "../../repository/Order/OrderRepository";

class FinishOrderService {
  private readonly _orderRepository: OrderRepository;
  constructor() {
    this._orderRepository = new OrderRepository();
  }

  async execute(id: string) {
    if (!id) {
      throw new Error("Id is required");
    }

    const order = await this._orderRepository.finishOrder(id);
    return order;
  }
}

export { FinishOrderService };
