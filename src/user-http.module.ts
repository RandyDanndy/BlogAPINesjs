import { Module } from '@nestjs/common';
import { UserModule } from './user-module';
import { UserService } from './auth/user-service';
import { UserController } from './auth/user-controller';

@Module({
  imports: [UserModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserHttpModule {}
