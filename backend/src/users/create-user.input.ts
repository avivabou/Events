import { WorkStatus } from '@employee-statuses/shared';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  status: WorkStatus;

  @Field()
  img: string;
}
