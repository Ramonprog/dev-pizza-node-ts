import { ICreateOrderDTO } from "../../DTO/OrderDTO";
import prismaClient from "../../prisma";

class OrderRepository {
  async create({ name, table }: ICreateOrderDTO) {
    const order = await prismaClient.order.create({
      data: {
        table,
        name,
      },
    });

    return order;
  }

  async remove(order_id: string) {
    const order = await prismaClient.order.delete({
      where: {
        id: order_id,
      },
    });

    return order;
  }
}

export { OrderRepository };