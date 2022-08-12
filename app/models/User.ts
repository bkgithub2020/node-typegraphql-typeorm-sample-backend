import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";


@ObjectType()
@Entity()
export class TblUsers extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  firstName: string;

  @Field(() => String)
  @Column()
  lastName: string;

  @Field(() => String)
  @Column()
  email: string;

  @Field()
  @Column({ default: 0 })
  isAdmin: boolean;

  @Field()
  @Column({ default: 1 })
  isActive: boolean;

  @Field()
  @CreateDateColumn()
  date_added: Date;

  @Field()
  @UpdateDateColumn()
  date_updated: Date;
}