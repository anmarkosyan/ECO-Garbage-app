import { EntityRepository, Repository } from 'typeorm';
import { ServiceEntity } from '../entities/Service';

@EntityRepository(ServiceEntity)
export class ServiceRepository extends Repository<ServiceEntity> {
  async getAllServices() {}

  async getService() {}

  async createService() {}

  async updateService() {}

  async deleteService() {}
}
