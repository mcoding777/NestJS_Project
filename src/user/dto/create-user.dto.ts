import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  user_id: string;

  @IsNotEmpty()
  user_pw: string;

  @IsNotEmpty()
  client: string;

  @IsNotEmpty()
  manager: string;

  @IsOptional()
  @IsString()
  phone: string;
}

export class GetUserDto {
  @IsNotEmpty()
  user_pw: string;
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  user_pw: string;

  @IsOptional()
  @IsString()
  client: string;

  @IsOptional()
  @IsString()
  manager: string;

  @IsOptional()
  @IsString()
  phone: string;
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

export class UpdateUserParams {
  user_pw?: string;
  client?: string;
  manager?: string;
  phone?: string;
}
