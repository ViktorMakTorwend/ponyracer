import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { LoggingAPIService } from './services/logging-api.service';
import { LoggingService } from './services/logging.service';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from '../app/app.routes';

const IS_PROD = false;

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes),
  ]
};
