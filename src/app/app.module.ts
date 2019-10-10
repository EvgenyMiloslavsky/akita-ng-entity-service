import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpMethod, NG_ENTITY_SERVICE_CONFIG, NgEntityServiceGlobalConfig} from '@datorama/akita-ng-entity-service';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {environment} from '../environments/environment';
import {WeatherComponent} from './weather/weather.component';
import {HttpClientModule} from '@angular/common/http';
import {WeatherService} from './weather.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  providers: [
    /*{
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: {
        baseUrl: 'https://jsonplaceholder.typicode.com'
      }
    }*/
    /*{
      provide: NG_ENTITY_SERVICE_CONFIG,
      useFactory: function() {
        return {
          baseUrl: 'https://jsonplaceholder.typicode.com',
          httpMethods: {
            PUT: HttpMethod.PATCH
          }
        } as NgEntityServiceGlobalConfig;
      },
      deps: []
    }*/
    { provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://dataservice.accuweather.com' }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

