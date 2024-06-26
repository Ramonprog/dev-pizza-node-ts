import { IAddItem, ICreateOrderDTO, ISendOrder } from "../../DTO/OrderDTO";
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

  async findByTable(table: number) {
    const order = await prismaClient.order.findFirst({
      where: {
        table: table,
      },
    });

    return order;
  }

  async addItem({ amount, order_id, product_id }: IAddItem) {
    const order = await prismaClient.item.create({
      data: {
        order_id,
        product_id,
        amount,
      },
    });

    return order;
  }

  async removeItem(item_id: string) {
    const order = await prismaClient.item.delete({
      where: {
        id: item_id,
      },
    });

    return order;
  }

  async sendOrder({ order_id }: ISendOrder) {
    const orderRequest = await prismaClient.order.update({
      where: {
        id: order_id,
      },
      data: {
        draft: false,
      },
    });

    return orderRequest;
  }

  async openOrdes() {
    const orders = await prismaClient.order.findMany({
      where: {
        draft: false,
        status: false,
      },
      orderBy: {
        created_at: "desc",
      },
      select: {
        id: true,
        draft: true,
        status: true,
        table: true,
        name: true,
      },
    });

    return orders;
  }

  async detail(id: string) {
    const order = await prismaClient.item.findMany({
      where: {
        order_id: id,
      },
      include: {
        product: true,
        order: true,
      },
    });

    return order;
  }

  async finishOrder(order_id: string) {
    const order = await prismaClient.order.update({
      where: {
        id: order_id,
      },
      data: {
        status: true,
      },
    });

    return order;
  }
}

export { OrderRepository };
