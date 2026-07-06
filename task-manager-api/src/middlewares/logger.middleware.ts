import { Request, Response, NextFunction } from "express";

export const loggerMiddleware = (
      req: Request,
      res: Response,
      next: NextFunction
): void => {

      console.log("========== Request ==========");
      console.log("Method :", req.method);
      console.log("URL    :", req.originalUrl);
      console.log("Time   :", new Date().toLocaleString());
      console.log("=============================");

      next();
};