import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PipelineDataService } from './pipeline-data.service';
import { PipelineDatumDto } from './dto/create-pipeline-datum.dto';
import { UpdatePipelineDatumDto } from './dto/update-pipeline-datum.dto';

@Controller('pipeline-data')
export class PipelineDataController {
  constructor(private readonly pipelineDataService: PipelineDataService) {}

  @Post()
  create(@Body() createPipelineDatumDto: PipelineDatumDto) {
    // return this.pipelineDataService.create(createPipelineDatumDto);
  }

  @Get()
  findAll() {
    return this.pipelineDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pipelineDataService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePipelineDatumDto: UpdatePipelineDatumDto,
  ) {
    return this.pipelineDataService.update(+id, updatePipelineDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pipelineDataService.remove(+id);
  }
}
