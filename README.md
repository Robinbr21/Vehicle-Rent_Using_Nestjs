

  Apis
---------

*> get /vehicle/car  => for getting types of cars
*> get /vehicle/Bike  => for getting types of bike

*> get /vehicle/Bike/:modal  => pass modal as wich bike model you selected , it return the bike name in selected modal
*> get /vehicle/car/:modal  => pass modal as wich car model you selected , it return the care name in selected modal

*> post /booking  => to book vehicle , it resturn succes if the criteria meet , else return error respo

json example for /booking
{
  "first_name": "nandu",
  "last_name": "krishna",
  "vehicle_type": "sdfds",
  "vehicle_model": "sdf",
  "vehicle_name": "sdfddsss",
  "start_date": "2023-12-18",
  "end_date": "2023-12-18"
}
