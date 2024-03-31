import { ISendOrder } from "../../DTO/OrderDTO";
import { OrderRepository } from "../../repository/Order/OrderRepository";

class SendOrderService {
  private readonly _sendOrderRepository: OrderRepository;

  constructor() {
    this._sendOrderRepository = new OrderRepository();
  }

  async execute({ order_id }: ISendOrder) {
    if (!order_id) {
      throw new Error("Order ID is required");
    }

    const order = await this._sendOrderRepository.sendOrder({ order_id });
    return order;
  }
}

export { SendOrderService };
