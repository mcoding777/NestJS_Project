import { Reference } from 'src/reference/entities/reference.entity';
import { User } from 'src/user/entities/user.entity';
import { PrimaryGeneratedColumn, OneToOne, Column } from 'typeorm';

export class PipelineDatum {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @OneToOne(() => Reference, (reference) => reference.id)
  description_id: number;

  @OneToOne(() => User, (user) => user.id)
  user_id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  options: string;
}
