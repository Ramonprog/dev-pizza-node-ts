import { Request, Response } from "express";
import { CreateProductService } from "../../services/products/CreateProductService";

class CreateProductController {
  async handle(req: Request, res: Response) {
    if (!req.file) {
      throw new Error("Error upload file");
    }

    const { name, price, description, category_id } = req.body;
    const { filename: banner, originalname } = req.file;

    const createProductService = new CreateProductService();

    const product = await createProductService.execute({
      banner,
      category_id,
      description,
      name,
      price,
    });

    return res.status(201).json(product);
  }
}

export { CreateProductController };
