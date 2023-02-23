import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  user_id: string;

  @IsNotEmpty()
  user_pw: string;

  @IsNotEmpty()
  client: string;

  @IsNotEmpty()
  manager: string;

  @IsNotEmpty()
  phone: string;
}

export type CreateUserParams = {
  user_id: string;
  user_pw: string;
  client: string;
  manager: string;
  phone: string;
};
