import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.model';
import { WorkStatus } from '@employee-statuses/shared';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return this.userModel
      .find({ isActive: true })
      .select('-isActive -deletedAt')
      .exec();
  }

  async createNewUser(
    name: string,
    status: WorkStatus,
    img: string,
  ): Promise<User> {
    const newUser = new this.userModel({ name, status, img, isActive: true });
    return newUser.save();
  }

  async updateStatus(userId: string, newStatus: WorkStatus): Promise<User> {
    return this.userModel
      .findByIdAndUpdate(userId, { status: newStatus }, { new: true })
      .exec();
  }

  async softDeleteUser(id: string): Promise<{ message: string; user: User }> {
    const user = await this.userModel.findByIdAndUpdate(
      id,
      { isActive: false, deletedAt: new Date() },
      { new: true },
    );

    if (!user) {
      throw new Error('User not found');
    }

    return { message: 'User marked as inactive', user };
  }

  async cleanupInactiveUsers(days: number): Promise<number> {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() - days);

    const result = await this.userModel.deleteMany({
      isActive: false,
      deletedAt: { $lt: expirationDate },
    });

    return result.deletedCount;
  }
}
