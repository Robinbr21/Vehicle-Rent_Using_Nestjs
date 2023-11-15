import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarEntity } from '../../models/car.entity';
import { bikeEntity } from '../../models/bike.entity';

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(CarEntity)
    private readonly carRepository: Repository<CarEntity>,
    @InjectRepository(bikeEntity)
    private readonly bikeRepository: Repository<bikeEntity>,
  ) { }

  async seedCars() {
    const carsData = [
      { id: 1, name: 'Toyota Corolla', vehicleType: 'Sedan' },
      { id: 2, name: 'Honda Civic', vehicleType: 'Sedan' },
      { id: 3, name: 'Ford Mustang', vehicleType: 'Sports Car' },
      { id: 4, name: 'Chevrolet Silverado', vehicleType: 'Truck' },
      { id: 5, name: 'Tesla Model 3', vehicleType: 'Electric' },
      { id: 6, name: 'BMW X5', vehicleType: 'SUV' },
      { id: 7, name: 'Nissan Altima', vehicleType: 'Sedan' },
      { id: 8, name: 'Audi A4', vehicleType: 'Sedan' },
      { id: 9, name: 'Mercedes-Benz C-Class', vehicleType: 'Sedan' },
      { id: 10, name: 'Volkswagen Golf', vehicleType: 'Hatchback' },
    ];
    await Promise.all(
      carsData.map(async (car) => {
        const newCar = this.carRepository.create(car);
        return await this.carRepository.save(newCar);
      }),
    );
  } 

  async seedBikes() {
    const bikeData = [
      { id: 11, name: 'Harley-Davidson Sportster', vehicleType: 'Cruiser' },
      { id: 12, name: 'Honda CBR600RR', vehicleType: 'Sport Bike' },
      { id: 13, name: 'Yamaha YZF-R1', vehicleType: 'Superbike' },
      { id: 14, name: 'Ducati Monster', vehicleType: 'Naked Bike' },
      { id: 15, name: 'Suzuki GSX-R750', vehicleType: 'Sport Bike' },
      { id: 16, name: 'Kawasaki Ninja 650', vehicleType: 'Sport Touring' },
      { id: 17, name: 'BMW R1250GS', vehicleType: 'Adventure' },
      { id: 18, name: 'Indian Scout', vehicleType: 'Cruiser' },
      { id: 19, name: 'Triumph Bonneville', vehicleType: 'Standard' },
      { id: 20, name: 'KTM 390 Duke', vehicleType: 'Naked Bike' },
    ];

    await Promise.all(
      bikeData.map(async (bike) => {
        const newBike = this.bikeRepository.create(bike);
        return await this.bikeRepository.save(newBike);
      }),
    );
  }
}
