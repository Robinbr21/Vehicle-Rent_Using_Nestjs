import { IsString, IsNotEmpty, IsDate } from 'class-validator';
import { Transform, TransformFnParams } from 'class-transformer';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @IsNotEmpty()
  @IsString()
  last_name: string;

  @IsNotEmpty()
  @IsString()
  vehicle_type: string;

  @IsNotEmpty()
  @IsString()
  vehicle_model: string;

  @IsNotEmpty()
  @IsString()
  vehicle_name: string;

  @IsDate()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => new Date(value))
  start_date: Date;

  @IsDate()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => new Date(value))
  end_date: Date;

  created_at: Date;
  updated_at: Date;
}
