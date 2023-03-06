import { IsNotEmpty, IsOptional } from 'class-validator';

export class PipelineDatumDto {
  @IsNotEmpty()
  user_id: string;

  @IsNotEmpty()
  value: string;

  @IsOptional()
  options: string;
}

export type PipelineDataParams = {
  user_id: string;
  value: string;
  options?: string;
};

export type PipelineDataEntity = {
  user_id: number;
  description_id: number;
  options?: string;
};
