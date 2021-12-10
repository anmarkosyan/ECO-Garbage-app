import {DeepPartial, EntityRepository, getConnection, getRepository, Repository} from "typeorm";
import {ServiceEntity} from "../entities/Service";


@EntityRepository(ServiceEntity)
export class ServiceRepository extends Repository<ServiceEntity> {
  static async getAllServices() {
    return await getRepository(ServiceEntity).find();
  }

  static async getService(serviceId: string) {
    const service = await getRepository(ServiceEntity).findOne(serviceId);
    if( service ) {
      return service;
    }else{
      throw new Error("Service not found");
    }
  }

  static async createService(newService: DeepPartial<ServiceEntity>) {
    const newEcoService = await getRepository(ServiceEntity).create(newService);
    await getRepository(ServiceEntity).save(newEcoService);
    return newEcoService;
  }

  static async updateService(id: string, newService: Partial<ServiceEntity>) {
    const service = await getRepository(ServiceEntity).findOne(id);
    if(service) {
      await getRepository(ServiceEntity).merge(service, newService);
      await getRepository(ServiceEntity).save(service);
      return {Message:"Updated..."}
    }else{
      throw new Error("Service not found...");
    }
  }

  static async deleteService(id: string) {
    const service = await getRepository(ServiceEntity).findOne(id);
    if(service) {
      await getConnection()
          .createQueryBuilder()
          .update(ServiceEntity)
          .delete()
          .where({service_id:id})
          .execute()
      return {Message:"Service deleted..."}
    }else{
      throw new Error("Service not found...")
    }
  }
};
