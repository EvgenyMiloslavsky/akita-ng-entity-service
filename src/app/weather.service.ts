import {Injectable} from '@angular/core';
import {NgEntityService, NgEntityServiceConfig} from '@datorama/akita-ng-entity-service';
import {WeatherState, WeatherStore} from './state/weather.store';

/*
@NgEntityServiceConfig({
  baseUrl: 'https://dataservice.accuweather.com'
})
*/

@Injectable({
  providedIn: 'root'
})
export class WeatherService extends NgEntityService<WeatherState> {

  constructor(protected store: WeatherStore) {
    super(store);
  }
}
