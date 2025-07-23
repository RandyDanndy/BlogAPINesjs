import { Module } from '@nestjs/common';
import { UserController } from './auth/user-controller';
import { UserService } from './auth/user-service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user';
import { DataSource } from 'typeorm';
import { UserModule } from './user-module';

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
    TypeOrmModule.forFeature([User]),
    User,
    UserModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
