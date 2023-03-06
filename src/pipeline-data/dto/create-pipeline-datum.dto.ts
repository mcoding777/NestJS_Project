import { IsNotEmpty, IsOptional } from 'class-validator';
import { Reference } from 'src/reference/entities/reference.entity';
import { User } from 'src/user/entities/user.entity';

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
  user: User;
  reference: Reference;
  options?: string;
};
