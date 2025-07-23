import { Injectable } from '@nestjs/common';
import { AbstractService } from '../abstract/abstract.service';
import { User } from '../entities/user.entity';
import { FindOptionsWhere, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService extends AbstractService<User> {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    super(userRepository);
  }
  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
  findOne(where: FindOptionsWhere<User>): Promise<User | null> {
    return this.userRepository.findOneBy(where);
  }
  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
