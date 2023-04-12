import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ParameterByUserService } from './parameterByUser.service';
import { ParameterByUserDto } from './dto/create-parameterByUser.dto';

@Controller('parameterByUser')
export class ParameterByUserController {
  constructor(
    private readonly ParameterByUserService: ParameterByUserService,
  ) {}

  @Post()
  create(@Body() createParameterByUserDto: ParameterByUserDto) {
    return this.ParameterByUserService.createPipelineData(
      createParameterByUserDto,
    );
  }

  // @Get()
  // findAll() {
  //   return this.ParameterByUserService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.ParameterByUserService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string) {
  //   return this.ParameterByUserService.update(+id);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.ParameterByUserService.remove(+id);
  // }
}
