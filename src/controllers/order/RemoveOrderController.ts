import { Request, Response } from "express";
import { RemoveOrderService } from "../../services/Order/RemoveOrderService";

class RemoveOrderController {
  async handle(req: Request, res: Response) {
    const order_id = req.query.order_id as string;
    const orderRemoveService = new RemoveOrderService();

    await orderRemoveService.execute(order_id);

    return res.json({});
  }
}

export { RemoveOrderController };
