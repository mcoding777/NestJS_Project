import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client.dto';
import {
  CreateClientParams,
  UpdateClientParams,
} from './dto/params-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientRepository {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  async save(createClientParams: CreateClientParams) {
    return await this.clientRepository.save(createClientParams);
  }

  async findAll() {
    return await this.clientRepository.find();
  }

  async findOne(company: string) {
    return await this.clientRepository.findOneBy({ company });
  }

  async update(id: number, updateClientParams: UpdateClientParams) {
    return await this.clientRepository.update(id, updateClientParams);
  }

  async delete(id: number) {
    return await this.clientRepository.delete(id);
  }
}
