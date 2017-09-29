
import { SettingsService } from './settings.service';
import { AuthService } from './auth.service';
import { BaseService } from './base.service';
import { ModuleWithProviders, NgModule } from '@angular/core';


@NgModule()
export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        AuthService,
        SettingsService,
        BaseService
      ]
    }
  }
 }