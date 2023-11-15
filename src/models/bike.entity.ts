import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bikes')
export class bikeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  
  @Column()
  vehicleType: string;  

}
