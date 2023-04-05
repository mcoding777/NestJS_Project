import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Get,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  async getAllClient() {
    return await this.clientService.getAllClient();
  }

  @Post()
  async createClient(@Body() createClientDto: CreateClientDto) {
    return await this.clientService.createClient(createClientDto);
  }

  @Patch(':company')
  updateClient(
    @Param('company') company: string,
    @Body() updateClientDto: UpdateClientDto,
  ) {
    return this.clientService.updateClient(company, updateClientDto);
  }

  @Delete(':company')
  removeClient(@Param('company') company: string) {
    return this.clientService.deleteClient(company);
  }
}
