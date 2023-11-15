import { Controller, Get ,Query,Param } from '@nestjs/common';
import { CarService } from '../services/vehicle.service';

@Controller('vehicle')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get("car")
  getAllCars() {
    return this.carService.getAllCars();
  }

  @Get("bike")
  getAllBikes() {
    return this.carService.getAllBikes();
  }

  @Get("bike/:model")
  getBikes(@Param('model') model: string){
    return this.carService.getBikes(model)
  }

  @Get("car/:model")
  getCars(@Param('model') model: string){
    return this.carService.getCars(model)
  }
}