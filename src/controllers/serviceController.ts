import { Request, Response, NextFunction } from 'express';
import { ServiceRepository } from '../services/service';
import { newService } from '../interfaces/service.interface';
import { HttpErr } from '../exceptions/HttpError';
import Exception from '../exceptions/exception';
import ExceptionMessages from '../exceptions/messages';
import { ServiceEntity } from '../entities/Service';
import StatusCode from '../exceptions/statusCodes';

export class ServiceController {
  static async createService(req: Request, res: Response, next: NextFunction) {
    try {
      const newService = req.body;
      const sendToServiceData = await ServiceRepository.createService(
        newService
      );
      res.status(StatusCode.CreateRequest).json(sendToServiceData);
    } catch {
      next(HttpErr.internalServerError(ExceptionMessages.INVALID.INPUT));
    }
  }

  static async getAllServices(req: Request, res: Response, next: NextFunction) {
    try {
      const sendToServiceData = await ServiceRepository.getAllServices();
      return res.status(200).json(sendToServiceData);
    } catch {
      next(HttpErr.internalServerError(ExceptionMessages.INVALID.INPUT));
    }
  }

  static async getService(req: Request, res: Response, next: NextFunction) {
    try {
      const serviceId = req.params.id;
      if (
        !serviceId.match(
          '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$'
        )
      ) {
        return next(HttpErr.badRequest(ExceptionMessages.INVALID.ID));
      }
      const sendToServiceData = await ServiceRepository.getService(serviceId);
      res.status(StatusCode.SuccessRequest).json(sendToServiceData);
    } catch {
      next(HttpErr.internalServerError(ExceptionMessages.INVALID.INPUT));
    }
  }

  static async updateService(req: Request, res: Response, next: NextFunction) {
    try {
      const serviceId = req.params.id;
      const newService = req.body;
      if (
        !serviceId.match(
          '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$'
        )
      ) {
        return next(HttpErr.badRequest(ExceptionMessages.INVALID.ID));
      }
      const updateData = await ServiceRepository.updateService(
        serviceId,
        newService
      );
      res.status(StatusCode.SuccessRequest).json(updateData);
    } catch {
      next(HttpErr.internalServerError(ExceptionMessages.INVALID.INPUT));
    }
  }

  static async deleteService(req: Request, res: Response, next: NextFunction) {
    try {
      const serviceId = req.params.id;
      if (
        !serviceId.match(
          '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$'
        )
      ) {
        return next(HttpErr.badRequest(ExceptionMessages.INVALID.ID));
      }

      const sendToServiceData = await ServiceRepository.deleteService(
        serviceId
      );
      return res.send(sendToServiceData);
    } catch {
      throw new Error('Delete service error');
    }
  }
}
