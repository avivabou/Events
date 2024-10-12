import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { UsersService } from './users.service';

@Injectable()
export class UsersCleanupService {
  constructor(private readonly usersService: UsersService) {}

  @Cron('0 0 * * *')
  async handleCleanup() {
    const days = 30;
    const deletedCount = await this.usersService.cleanupInactiveUsers(days);
    console.log(`${deletedCount} inactive users deleted.`);
  }
}
