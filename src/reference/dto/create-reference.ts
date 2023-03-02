import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateReferenceDto {
  @IsNotEmpty()
  value: string;

  @IsNotEmpty()
  label: string;

  @IsOptional()
  @IsString()
  description: string;
}

export type ReferenceParams = {
  value: string;
  label: string;
  description?: string;
};
