import express, { NextFunction, Request, Response } from "express";
import "express-async-errors"; //ajuda no tratamento de erros
import cors from "cors";
import path from "path";

import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.use("/files", express.static(path.resolve(__dirname, "..", "temp"))); // para exibir a imagem da pasta temp

//Deixando erros mais "amigáveis"
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    });
  }

  return res
    .status(500)
    .json({ status: "error", message: "Internal server error." });
});

app.listen(3333, () => console.log("Server running at port 3333"));
