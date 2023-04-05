import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty()
  company: string;

  @IsNotEmpty()
  manager: string;

  @IsOptional()
  @IsString()
  phone: string;
}
