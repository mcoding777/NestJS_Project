import { PartialType } from '@nestjs/mapped-types';
import { GetPipelineDto } from './create-pipeline.dto';

export class UpdatePipelineDto extends PartialType(GetPipelineDto) {}
