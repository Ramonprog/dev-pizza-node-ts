import { OrderRepository } from "../../repository/Order/OrderRepository";

class ListOrdersService {
  private readonly _ListOrderRepository: OrderRepository;
  constructor() {
    this._ListOrderRepository = new OrderRepository();
  }

  async execute() {
    return await this._ListOrderRepository.openOrdes();
  }
}

export { ListOrdersService };
