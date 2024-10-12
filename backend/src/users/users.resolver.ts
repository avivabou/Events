import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './users.model';
import { CreateUserInput } from './create-user.input';
import { WorkStatus } from '@employee-statuses/shared';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User])
  async findAll() {
    return this.usersService.findAll();
  }

  @Mutation(() => User)
  async createUser(@Args('input') input: CreateUserInput) {
    return this.usersService.createNewUser(input.name, input.status, input.img);
  }

  @Mutation(() => User)
  async updateStatus(
    @Args('id') id: string,
    @Args('status') status: WorkStatus,
  ) {
    return this.usersService.updateStatus(id, status);
  }

  @Mutation(() => User)
  async softDeleteUser(@Args('id') id: string) {
    return this.usersService.softDeleteUser(id);
  }
}
