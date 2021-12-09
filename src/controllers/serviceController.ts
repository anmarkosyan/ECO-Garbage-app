import { Request, Response, NextFunction } from "express";
import { getManager } from "typeorm";
import { ServiceRepository } from "../services/service";
import { ServiceEntity } from "../entities/Service";

const manager = () => getManager().getCustomRepository(ServiceRepository);

export class ServiceController {
 static async createService(req: Request, res: Response, next: NextFunction) {
  try {
   const { type } = req.body;

   const service = new ServiceEntity();
   service.type = type;

   const serviceData = await manager().createService(service);
   res.status(201).json(serviceData);
  } catch (e) {
   throw new Error('=====')
  }
 }

 static async getAllServices(
   req: Request,
   res: Response,
   next: NextFunction
 ) {}

 static async getService(req: Request, res: Response, next: NextFunction) {}

 static async updateService(req: Request, res: Response, next: NextFunction) {}

 static async deleteService(req: Request, res: Response, next: NextFunction) {}
}
