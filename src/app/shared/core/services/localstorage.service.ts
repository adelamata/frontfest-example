import { Injectable } from '@angular/core';
import { PersistInterface, LocalStoragePersist } from '../interfaces/persists.interface';

@Injectable()
export class LocalStorageService
  implements PersistInterface<LocalStoragePersist> {
  /**
   *
   * @param param
   */
  save(param: LocalStoragePersist): void {
    localStorage.setItem(param.key, param.value);
  }

  /**
   *
   * @param param
   */
  remove(param: LocalStoragePersist): void {
    localStorage.setItem(param.key, param.value);
  }

  /**
   *
   * @param param
   */
  get(key: string) {
    return localStorage.getItem(key);
  }

  /**
   *
   * @param param
   */
  clear() {
    localStorage.clear();
  }
}
