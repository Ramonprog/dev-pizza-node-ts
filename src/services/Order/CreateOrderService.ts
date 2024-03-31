import { ICreateOrderDTO } from "../../DTO/OrderDTO";
import { OrderRepository } from "../../repository/Order/OrderRepository";
import { CreateOrderSchema } from "../../schemas/OrderSchema";

class CreateOrderService {
  private readonly _CreateOrderRepository: OrderRepository;

  constructor() {
    this._CreateOrderRepository = new OrderRepository();
  }

  async execute({ name, table }: ICreateOrderDTO) {
    const validateData = CreateOrderSchema.parse({ table });

    if (!validateData) {
      throw new Error("Invalid data");
    }

    const order = await this._CreateOrderRepository.create({ name, table });
    return order;
  }
}

export { CreateOrderService };
