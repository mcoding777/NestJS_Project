import { IsNotEmpty, IsOptional } from 'class-validator';
import { Reference } from 'src/reference/entities/reference.entity';
import { User } from 'src/user/entities/user.entity';

export class ParameterByUserDto {
  @IsNotEmpty()
  user_id: string;

  @IsNotEmpty()
  value: string;

  @IsOptional()
  options: string;
}

export type ParameterByUserParams = {
  user_id: string;
  value: string;
  options?: string;
};

export type ParameterByUserEntity = {
  user: User;
  reference: Reference;
  options?: string;
};
