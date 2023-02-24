import { IsNotEmpty } from 'class-validator';

export class CreateReferenceDto {
  @IsNotEmpty()
  value: string;

  @IsNotEmpty()
  label: string;

  description: string;
}

export type CreateReferenceParams = {
  value: string;
  label: string;
  description?: string;
};
