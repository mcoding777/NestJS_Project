import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Get,
  Query,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { GetClientDto } from './dto/get-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  async getAllClient(@Query() pagination?: GetClientDto) {
    return await this.clientService.getAllClient(pagination);
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
