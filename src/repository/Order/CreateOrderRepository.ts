import { ICreateOrderDTO } from "../../DTO/OrderDTO";
import prismaClient from "../../prisma";

class CreateOrderRepository {
  async create({ name, table }: ICreateOrderDTO) {
    const order = await prismaClient.order.create({
      data: {
        table,
        name,
      },
    });

    return order;
  }
}

export { CreateOrderRepository };
