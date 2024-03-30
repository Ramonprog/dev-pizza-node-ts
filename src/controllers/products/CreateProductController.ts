import { Request, Response } from "express";
import { CreateProductService } from "../../services/products/CreateProductService";

class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, price, description, category_id } = req.body;
    let banner = "";
    const createProductService = new CreateProductService();

    const product = await createProductService.execute({
      banner,
      category_id,
      description,
      name,
      price,
    });

    return res.json(product);
  }
}

export { CreateProductController };
