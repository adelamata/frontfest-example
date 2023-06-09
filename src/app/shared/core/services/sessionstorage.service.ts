import { Injectable } from '@angular/core';
import { PersistInterface } from '../interfaces/persists.interface';

interface SessionStoragePersistObj {}

@Injectable()
export class SessionstorageService
  implements PersistInterface<SessionStoragePersistObj> {
  save(param: Partial<SessionStoragePersistObj>): void {}
  remove(param: Partial<SessionStoragePersistObj>): void {}
}
