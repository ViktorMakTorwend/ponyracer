import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { LoggingAPIService } from './services/logging-api.service';
import { LoggingService } from './services/logging.service';
import { GetPoniesService } from './services/get-ponies.service';

const IS_PROD = false;

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
  ]
};
