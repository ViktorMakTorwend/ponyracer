import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { LoggingAPIService } from './services/logging-api.service';
import { LoggingService } from './services/logging.service';
import { provideHttpClient } from '@angular/common/http';

const IS_PROD = false;

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
  ]
};
