import { IsNotEmpty } from 'class-validator';

export class GetPipelineDto {
  @IsNotEmpty()
  user_id: string;
}
