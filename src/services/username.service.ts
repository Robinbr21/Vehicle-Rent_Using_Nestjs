import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../models/user.entity'

@Injectable()
export class UsernameService {

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) { }



  async UsernameInsert(bookingDto): Promise<string> {

    const { vehicle_name } = bookingDto;
    const existingUser = await this.userRepository.findOne({ where: { vehicle_name } });

    if (existingUser) {
      return 'The vehicle youare selected is not Available'
    }else{
      const newUser = this.userRepository.create(bookingDto);
      await this.userRepository.save(newUser);

      return `Booking for ${bookingDto.first_name} ${bookingDto.last_name} Succesfully Done`;
    }

  }
}