import { InputType, Field } from "type-graphql";
import { IsEmail } from "class-validator";

@InputType()
export class UpdateUserInput {
    @Field({ nullable: true })
    firstName: string;

    @Field({ nullable: true })
    lastName: string;

    @Field({ nullable: true })
    @IsEmail()
    email: string;

    @Field({ nullable: true })
    isAdmin: number;

    @Field({ nullable: true })
    isActive: number;

}
