import { Request, Response, NextFunction } from 'express';
import { getManager } from 'typeorm';
import { ServiceEntity } from '../entities/Service';
import { ServiceRepository } from '../services/service';

const manager = () => getManager().getCustomRepository(ServiceRepository);

export class ServiceController {
  static async createService(req: Request, res: Response, next: NextFunction) {}

 static async getAllServices(
    req: Request,
    res: Response,
    next: NextFunction
  ) {}

   static async getService(req: Request, res: Response, next: NextFunction) {}

   static async updateService(req: Request, res: Response, next: NextFunction) {}

   static async deleteService(req: Request, res: Response, next: NextFunction) {}
}
