import { User } from 'src/user';
import { EntitySchema } from 'typeorm';

export const UserSchema = new EntitySchema<User>({
  name: 'User',
  target: User,
  tableName: 'users',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    firstName: {
      type: 'string',
      nullable: false,
    },
    lastName: {
      type: 'string',
      nullable: false,
    },
    isActive: {
      type: 'boolean',
      default: true,
    },
  },
});
