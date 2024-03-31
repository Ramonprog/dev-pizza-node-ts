import { Request, Response } from "express";
import { ListOrdersService } from "../../services/Order/ListOrdersService";

class ListOrdesController {
  async handle(request: Request, response: Response) {
    const listService = new ListOrdersService();
    const orders = await listService.execute();
    return response.json(orders);
  }
}

export { ListOrdesController };
