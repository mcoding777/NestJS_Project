import { Module } from '@nestjs/common';
import { ReferenceService } from './reference.service';
import { ReferenceController } from './reference.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reference } from './entities/reference.entity';
import { ReferenceRepository } from './reference.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Reference])],
  controllers: [ReferenceController],
  providers: [ReferenceRepository, ReferenceService],
})
export class ReferenceModule {}
