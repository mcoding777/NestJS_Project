import { IsOptional } from 'class-validator';

export class GetClientDto {
  @IsOptional()
  limit: number;

  @IsOptional()
  page: number;
}
