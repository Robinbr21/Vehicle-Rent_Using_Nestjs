import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SeederService } from './services/seederservice/seeder.service';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //for seeding uncomment this
  
  const seederService = app.get(SeederService);
  await seederService.seedCars(); 
  await seederService.seedBikes();

  await app.listen(3000);
}
bootstrap();
