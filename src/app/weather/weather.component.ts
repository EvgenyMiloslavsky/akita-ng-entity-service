import {Component, OnInit} from '@angular/core';
import {WeatherQuery} from '../state/weather.query';
import {WeatherService} from '../weather.service';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather$ = this.weatherQuery.getAll();

  params: HttpParams = new HttpParams()
    .set('apikey', 'hjZuRkwFx2UcPWrPg2b6oRK4DoqsUKlG')
    .set('q', 'Tel Aviv')
    .set('language', 'en-us')
    .set('details', 'false')
  ;

  constructor(
    private weatherQuery: WeatherQuery,
    private  weatherService: WeatherService) {
  }

  ngOnInit() {
    this.weatherService.get('', {params: this.params}).subscribe((result) => {
      console.log('>>>', result);
    });
    console.log('Log', this.weather$);
  }

}
