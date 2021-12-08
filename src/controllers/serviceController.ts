import { Request, Response, NextFunction } from 'express';
import { getManager } from 'typeorm';
import { ServiceEntity } from '../entities/Service';
import { ServiceRepository } from '../services/service';

const manager = () => getManager().getCustomRepository(ServiceRepository);

export class ServiceController {
  static async createService(req: Request, res: Response, next: NextFunction) {}

 async getAllServices(
    req: Request,
    res: Response,
    next: NextFunction
  ) {}

   async getService(req: Request, res: Response, next: NextFunction) {}

   async updateService(req: Request, res: Response, next: NextFunction) {}

   async deleteService(req: Request, res: Response, next: NextFunction) {}
}
