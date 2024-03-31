import { ICreateOrderDTO } from "../../DTO/OrderDTO";
import { CreateOrderRepository } from "../../repository/Order/CreateOrderRepository";
import { CreateOrderSchema } from "../../schemas/OrderSchema";

class CreateOrderService {
  private readonly _CreateOrderRepository: CreateOrderRepository;

  constructor() {
    this._CreateOrderRepository = new CreateOrderRepository();
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
