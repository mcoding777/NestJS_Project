import { Optional } from '@nestjs/common';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  user_id: string;

  @IsNotEmpty()
  user_pw: string;

  @IsNotEmpty()
  client: string;

  @IsNotEmpty()
  manager: string;

  @Optional()
  @IsString()
  phone: string;

  @Optional()
  @IsNumber()
  verify: number;
}

export class GetUserDto {
  @IsNotEmpty()
  user_pw: string;
}

export type CreateUserParams = {
  user_id: string;
  user_pw: string;
  client: string;
  manager: string;
  phone: string;
};

export type GetUserParams = {
  user_id?: string;
  user_pw: string;
};
