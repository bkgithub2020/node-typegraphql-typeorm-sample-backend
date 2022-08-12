import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { TblUsers } from "../models/User";
import { CreateUserInput } from "../inputs/CreateUserInput";
import { UpdateUserInput } from "../inputs/UpdateUserInput";

@Resolver()
export class UserResolver {
  @Query(() => String)
  hello() {
    return "hi!";
  }

  /**
   * Add User
   */
  @Mutation(() => TblUsers)
  async createUser(
    @Arg("data") data: CreateUserInput
  ) {
    try {
      const user = new TblUsers();
      Object.assign(user, data);
      await user.save();
      return user;

    } catch (error) {
      throw new Error(error)
    }
  }

  /**
 * Update User
 */
  @Mutation(() => TblUsers)
  async updateCategory(@Arg("id") id: number, @Arg("data") data: UpdateUserInput) {
    try {
      const user = await TblUsers.findOne({ where: { id } });
      if (!user) throw new Error("User not found!");
      Object.assign(user, data);
      await user.save();
      return user;

    } catch (error) {
      throw new Error(error)
    }
  }

  /**
   * Delete User
   */
  @Mutation(() => Boolean)
  async deleteCategory(@Arg("id") id: number) {
    const user = await TblUsers.findOne({ where: { id } });
    if (!user) throw new Error("User not found!");
    await user.remove();
    return true;
  }
}