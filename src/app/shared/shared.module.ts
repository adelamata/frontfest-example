import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from './services/localstorage.service';

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class SharedModule {
  static forChild(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [LocalStorageService]
    };
  }
}
