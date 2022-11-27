import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

constructor( public http : HttpClient ) { }

buscarDados(latitude,longitude) {
  let lat = latitude;
  let long = longitude;
  return this.http.get('https://api.open-meteo.com/v1/forecast?latitude=' + lat + '&longitude=' + long + '&hourly=temperature_2m,precipitation,temperature_80m,temperature_120m,temperature_180m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_hours&timezone=America%2FSao_Paulo')
  // return this.http.get('https://api.open-meteo.com/v1/forecast?latitude=-21.79&longitude=-48.18&hourly=temperature_2m,precipitation,rain,visibility')
}

buscarDados2(latitude, longitude): any {
  return this.http.get(`https://api.open-meteo.com/v1/forecast?latitude=` + latitude + `&longitude=` + longitude +
  `&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation,rain,showers,weathercode,cloudcover,cloudcover_low,cloudcover_mid,cloudcover_high&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,rain_sum,precipitation_hours&current_weather=true&timezone=America%2FSao_Paulo`);
}

}
