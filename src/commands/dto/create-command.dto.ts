import { IsNotEmpty } from 'class-validator';

export class CreateCommandDto {
  @IsNotEmpty()
  command: string;

  @IsNotEmpty()
  end_point: string;
}

export type CreateCommandParams = {
  command: string;
  end_point: string;
};
