import { Injectable } from '@angular/core';
import { PersistInterface } from '../interfaces/persists.interface';

interface LocalStoragePersist {
  key: string;
  value: string;
}

@Injectable()
export class LocalStorageService
  implements PersistInterface<LocalStoragePersist> {
  /**
   *
   * @param param
   */
  add(param: Partial<LocalStoragePersist>): void {}

  /**
   *
   * @param param
   */
  remove(param: Partial<LocalStoragePersist>): void {}
}
