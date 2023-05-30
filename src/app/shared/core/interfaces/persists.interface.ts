export interface PersistInterface<T> {
  save(param: T): void;
  remove(param: T): void;
}

export interface LocalStoragePersist {
  key: string;
  value: string;
}
