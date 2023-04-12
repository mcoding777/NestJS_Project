import { Module } from '@nestjs/common';
import { ParameterByUserService } from './parameterByUser.service';
import { ParameterByUserController } from './parameterByUser.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParameterByUser } from './entities/parameterByUser.entity';
import { ParameterByUserRepository } from './parameterByUser.repository';
import { ReferenceRepository } from 'src/reference/reference.repository';
import { UserService } from 'src/user/user.service';
import { Reference } from 'src/reference/entities/reference.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ParameterByUser, Reference, User])],
  controllers: [ParameterByUserController],
  providers: [
    ParameterByUserService,
    ParameterByUserRepository,
    UserService,
    ReferenceRepository,
  ],
})
export class ParameterByUserModule {}
