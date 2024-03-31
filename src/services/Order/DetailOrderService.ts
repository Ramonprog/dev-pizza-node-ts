import { OrderRepository } from "../../repository/Order/OrderRepository";

class DetailOrderService {
  private readonly _orderRepository: OrderRepository;
  constructor() {
    this._orderRepository = new OrderRepository();
  }

  async execute(id: string) {
    return await this._orderRepository.detail(id);
  }
}

export { DetailOrderService };
