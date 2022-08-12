import { InputType, Field } from "type-graphql";
import { IsEmail } from "class-validator";

@InputType()
export class CreateUserInput {
  @Field()
  firstName: string;
  
  @Field()
  lastName: string;

  @Field()
  @IsEmail()
  email: string;

}
