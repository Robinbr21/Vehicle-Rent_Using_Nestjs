import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cars')
export class CarEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  
  @Column()
  vehicleType: string;

}
