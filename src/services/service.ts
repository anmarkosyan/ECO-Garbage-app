import { EntityRepository, Repository } from "typeorm";
import { ServiceEntity } from "../entities/Service";

interface newService{
  type:string;
  coordinates: number[];
  summary: string;
  description: string;
}

@EntityRepository(ServiceEntity)
export class ServiceRepository extends Repository<ServiceEntity> {
  async getAllServices() {
    const data = await this.createQueryBuilder("service").getMany();
    return data;
  }

  async getService(serviceId: string) {
    if(!serviceId){
      throw new Error('service not found!!')
    }
    const service = await this.createQueryBuilder("service")
      .where("service.id = :query", { query: serviceId })
      .getOne();

    return service;
  }

  async createService(newService: { type: string }) {
    console.log(newService)
    const data = await this.save(newService);
    return data;
  }

  async updateService(id: string, attrs: Partial<ServiceEntity>) {
    const updatedBoard = await this.createQueryBuilder('service')
      .update(ServiceEntity)
      .set({ ...attrs })
      .where('service.id = :query', { query: id })
      .execute()
      .then(() => this.findOne(id));
    return updatedBoard;
  }

  async deleteService(id: string) {
    const data = await this.findOne(id);
    if(!data){
      throw new Error('service not found!!');
    }
    await this.createQueryBuilder('service')
      .delete()
      .from(ServiceEntity)
      .where('service.id = :query', { query: id })
      .execute();
    return data;
  }
}
