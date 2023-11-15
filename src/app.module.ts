import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { CarController } from './controllers/vehicle.controller';
import { usernameController } from './controllers/user.controller';
import { CarService } from './services/vehicle.service';
import { UsernameService } from './services/username.service';
// import { ValidationMiddleware } from './middleware/validation.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './database/connection';
import { ConfigModule } from '@nestjs/config'; // Correct import statement

import { SeederService } from './services/seederservice/seeder.service';
import { CarEntity } from './models/car.entity'
import { bikeEntity } from './models/bike.entity'
import { UserEntity } from './models/user.entity'

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true, 
  }), TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService })
    , TypeOrmModule.forFeature([CarEntity, bikeEntity, UserEntity])],
  controllers: [CarController, usernameController],
  providers: [CarService, UsernameService, SeederService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(ValidationMiddleware).forRoutes('bookings');
  }
}
