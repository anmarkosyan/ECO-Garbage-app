import {
  DeepPartial,
  EntityRepository,
  getConnection,
  getRepository,
  Repository,
} from 'typeorm';
import { ServiceEntity } from '../entities/Service';
import { IService } from '../interfaces';

@EntityRepository(ServiceEntity)
export class ServiceRepository extends Repository<ServiceEntity> {
  static async getAllServices() {
    return await getRepository(ServiceEntity).find();
  }

  static async getService(serviceId: string) {
    try {
      const service = await getRepository(ServiceEntity).findOne(serviceId);
      return service;
    } catch {
      return null;
    }
  }

  static async createService(newService: DeepPartial<ServiceEntity>) {
    const newEcoService = await getRepository(ServiceEntity).create(newService);
    await getRepository(ServiceEntity).save(newEcoService);
    return newEcoService;
  }

  static async updateService(id: string, newService: IService) {
    try {
      const service = await getRepository(ServiceEntity).findOne(id);
      if (service) {
        await getRepository(ServiceEntity).merge(service, newService);
        const updatedData = await getRepository(ServiceEntity).save(service);
        return updatedData;
      }
    } catch {
      return null;
    }
  }

  static async deleteService(id: string) {
    try {
      const service = await getRepository(ServiceEntity).findOne(id);
      if (service) {
        const data = await getConnection()
          .createQueryBuilder()
          .update(ServiceEntity)
          .delete()
          .where({ service_id: id })
          .execute();
        return data;
      }
    } catch {
      return null;
    }
  }
}
