import { OrderRepository } from "../../repository/Order/OrderRepository";

class RemoveOrderService {
  private readonly _RemoveOrderRepository: OrderRepository;
  constructor() {
    this._RemoveOrderRepository = new OrderRepository();
  }

  async execute(order_id: string) {
    console.log("chegou no service");
    if (!order_id) {
      throw new Error("Order id is required");
    }

    const order = await this._RemoveOrderRepository.remove(order_id);
    return order;
  }
}

export { RemoveOrderService };
