import { UserModule } from './user_module/user.module';
import { Post } from './entities/post.entity';
import { UserController } from './users/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UserService } from './users/users.service';
import { UserhttpModule } from './user_http/userhttp.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'myuser',
      password: 'mypassword',
      database: 'mydatabase',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    Post,
    UserhttpModule,
  ],
  controllers: [UserController, UserController],
  providers: [UserService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
