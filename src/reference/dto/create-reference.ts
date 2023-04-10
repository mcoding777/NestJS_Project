import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateReferenceDto {
  @IsNotEmpty()
  value: string;

  @IsNotEmpty()
  label: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsNotEmpty()
  data_type: 'string' | 'integer';

  @IsNotEmpty()
  component_type: 'select' | 'multi-select' | 'text' | 'time' | 'date';

  @IsNotEmpty()
  required: 'required' | 'optional';
}

export type ReferenceParams = {
  value: string;
  label: string;
  description?: string;
  data_type: string;
  component_type: string;
  required: string;
};
