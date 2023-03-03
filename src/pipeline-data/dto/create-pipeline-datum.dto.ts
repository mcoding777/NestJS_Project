import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class PipelineDatumDto {
  @IsNotEmpty()
  user_id: string;

  @IsNotEmpty()
  value: string;

  @IsOptional()
  @IsString()
  options: string[];
}
