import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { ClientRepository } from './client.repository';
import {
  CreateClientParams,
  UpdateClientParams,
} from './dto/params-client.dto';

@Injectable()
export class ClientService {
  constructor(
    @Inject(ClientRepository)
    private clientRepository: ClientRepository,
  ) {}

  async getAllClient() {
    return await this.clientRepository.findAll();
  }

  async createClient(createClientParams: CreateClientParams) {
    const found = await this.clientRepository.findOne(
      createClientParams.company,
    );

    if (found) {
      throw new ConflictException('이미 존재하는 고객사입니다.');
    }

    return await this.clientRepository.save(createClientParams);
  }

  async updateClient(company: string, updateClientParams: UpdateClientParams) {
    const found = await this.clientRepository.findOne(company);
    const updateFound = await this.clientRepository.findOne(
      updateClientParams.company,
    );

    if (!found) {
      throw new ConflictException('존재하지 않는 고객사입니다.');
    }

    if (updateFound) {
      throw new ConflictException('이미 존재하는 고객사로 수정할 수 없습니다.');
    }

    return this.clientRepository.update(found.id, updateClientParams);
  }

  async deleteClient(company: string) {
    const found = await this.clientRepository.findOne(company);

    if (!found) {
      throw new ConflictException('존재하지 않는 고객사입니다.');
    }

    return this.clientRepository.delete(found.id);
  }
}
