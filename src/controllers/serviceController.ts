import { Request, Response, NextFunction } from "express";
import { ServiceRepository } from "../services/service";

export class ServiceController {
 static async createService(req: Request, res: Response, next: NextFunction) {
  try{
      const newService = req.body;
    const sendToServiceData = await ServiceRepository.createService(newService);
    return res.send(sendToServiceData);
  }catch {
    throw new Error("Create service error")
  }
 }

 static async getAllServices(req: Request, res: Response, next: NextFunction) {
  try {
    const sendToServiceData = await ServiceRepository.getAllServices()
    return res.send(sendToServiceData);
  }catch {
    throw new Error("Get all services error");
  }
 }

 static async getService(req: Request, res: Response, next: NextFunction) {
  try{
   const serviceId = req.params.id;
   const sendToServiceData = await ServiceRepository.getService(serviceId);
   return res.send(sendToServiceData);
  }catch {
   throw new Error("get Service error");
  }
 }

 static async updateService(req: Request, res: Response, next: NextFunction) {
  try{
    const serviceId = req.params.id;
    const newService = req.body;
    const sendToServiceData = await ServiceRepository.updateService(serviceId, newService);
    return res.send(sendToServiceData);
  }catch {
    throw new Error("updated service error");
  }
 }

 static async deleteService(req: Request, res: Response, next: NextFunction) {
  try{
   const serviceId = req.params.id;
   const sendToServiceData = await ServiceRepository.deleteService(serviceId);
   return res.send(sendToServiceData);
  }catch {
   throw new Error("Delete service error");
  }
 }
}

