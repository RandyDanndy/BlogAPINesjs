import { Injectable } from '@nestjs/common';
import { BaseEntity, Repository, DeepPartial, FindOptionsWhere } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@Injectable()
export abstract class AbstractService<T extends BaseEntity> {
  constructor(protected readonly repository: Repository<T>) {}
  create(data: DeepPartial<T>): Promise<T> {
    return this.repository.save(data);
  }
  findAll(): Promise<T[]> {
    return this.repository.find();
  }
  findOne(where: FindOptionsWhere<T>): Promise<T | null> {
    return this.repository.findOne({ where });
  }
  update(id: number, data: QueryDeepPartialEntity<T>): Promise<any> {
    return this.repository.update(id, data);
  }
  delete(id: number): Promise<any> {
    return this.repository.delete(id);
  }
}
