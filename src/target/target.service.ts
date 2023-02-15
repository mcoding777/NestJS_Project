import { Injectable } from '@nestjs/common';
import { target } from 'src/target/dummy';

@Injectable()
export class TargetService {
  private target = target;

  getTarget() {
    return this.target;
  }
}
