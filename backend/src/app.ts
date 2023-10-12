import express, { Express, json, NextFunction, Request, Response } from "express";
import { Pool } from "pg";

export class App {
  app: Express;
  readonly port: number;
  pool: Pool;

  constructor() {
    this.app = express();
    this.port = Number(process.env.PORT) || 8080;
    this.pool = new Pool({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 5432,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB,
    });
  }

  useRoutes() {
    this.app.get("/", (req, res) => {
      res.send("Привет мир");
    });
    this.app.post("/", (req: Request, res: Response) => {
      const { name, location } = req.body;

      res.status(200).send({
        message: `YOUR KEYS WERE ${name}, ${location}`,
      });
    });
  }

  accessControl() {
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      next();
    });
  }

  public init() {
    this.app.use(json());
    this.accessControl();
    this.useRoutes();
    this.app.listen(this.port, () => {
      console.log(`[server]: Server is running at http:localhost:${this.port}`);
    });
  }
}
