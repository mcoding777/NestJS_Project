import { Injectable } from '@nestjs/common';
import { dummy } from './dummy';

@Injectable()
export class StatusService {
  private status = dummy;

  getStatus() {
    return this.status;
  }
}
