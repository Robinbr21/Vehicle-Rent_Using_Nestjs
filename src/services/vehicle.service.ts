import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CarEntity } from '../models/car.entity';
import { bikeEntity } from '../models/bike.entity';


@Injectable()
export class CarService {

  constructor(
    @InjectRepository(CarEntity)
    private readonly carRepository: Repository<CarEntity>,
    @InjectRepository(bikeEntity)
    private readonly BikeRepository: Repository<CarEntity>
  ) {}


  async getAllCars(): Promise<string[]> {
    const carTypes = await this.carRepository
      .createQueryBuilder('car')
      .select('DISTINCT car.vehicleType', 'vehicleType')
      .getRawMany();

    return carTypes.map((result) => result.vehicleType);    
  }

  async getAllBikes(): Promise<string[]> {
    
    const carTypes = await this.BikeRepository
      .createQueryBuilder('bike')
      .select('DISTINCT bike.vehicleType', 'vehicleType')
      .getRawMany();

    return carTypes.map((result) => result.vehicleType);    
  }

  async getBikes(model : string) : Promise<string[]>{
    const bikeTypes = await this.BikeRepository
      .createQueryBuilder('bike')
      .select('DISTINCT bike.name', 'name')
      .where('bike.vehicleType = :model', { model })
      .getRawMany();

    return bikeTypes.map((result) => result.name);
  }

  async getCars(model : string) : Promise<string[]>{
    const carTypes = await this.carRepository
      .createQueryBuilder('car')
      .select('DISTINCT car.name', 'name')
      .where('car.vehicleType = :model', { model })
      .getRawMany();

    return carTypes.map((result) => result.name);
  }

}
