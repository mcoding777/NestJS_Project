import { PartialType } from '@nestjs/mapped-types';
import { PipelineDatumDto } from './create-pipeline-datum.dto';

export class UpdatePipelineDatumDto extends PartialType(PipelineDatumDto) {}
