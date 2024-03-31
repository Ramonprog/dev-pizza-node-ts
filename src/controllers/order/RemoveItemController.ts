import { Request, Response } from "express";
import { RemoveItemService } from "../../services/Order/RemoveItemService";

class RemoveItemController {
  async handle(req: Request, res: Response) {
    const item_id = req.query.item_id as string;

    const removeService = new RemoveItemService();

    await removeService.execute(item_id);
    return res.json({ message: "item deletado com sucesso" });
  }
}

export { RemoveItemController };
