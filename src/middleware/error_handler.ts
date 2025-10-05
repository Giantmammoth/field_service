import { fail } from "assert";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  return res.status(500).json(fail("Erreur interne"));
};
