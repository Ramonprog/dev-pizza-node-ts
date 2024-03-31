import { Request, Response } from "express";
import { ListProductByCategoryService } from "../../services/products/ListProductByCategoryService";

class ListProductByCategory {
  async handle(req: Request, res: Response) {
    const listProductService = new ListProductByCategoryService();

    const category_id = req.query.category_id as string;

    const listProduct = await listProductService.execute(category_id);

    return res.json(listProduct);
  }
}

export { ListProductByCategory };
