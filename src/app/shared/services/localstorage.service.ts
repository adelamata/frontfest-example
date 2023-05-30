import { Injectable } from '@angular/core';
import { PersistInterface } from '../interfaces/persists.interface';

interface LocalStoragePersist {
  key: string;
  value: string;
}

@Injectable()
export class LocalStorageService{
  /**
   *
   * @param param
   */
  add(param: Partial<LocalStoragePersist>): void {
    localStorage.setItem(param.key!, param.value!);
  }

  /**
   *
   * @param param
   */
  remove(param: Partial<LocalStoragePersist>): void {
    localStorage.setItem(param.key!, param.value!);
  }

   /**
   *
   * @param param
   */
  get(param: Partial<LocalStoragePersist>) {
    return localStorage.getItem(param.key!)
  }

   /**
   *
   * @param param
   */
  clear() {
    localStorage.clear();
  }
}
