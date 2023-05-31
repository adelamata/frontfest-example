export interface PersistInterface<T> {
  save(param: T): void;
  remove(param: T): void;
  exists(param: string): boolean;
  get(param: string): string | null;
  clear(): void;
}

export interface LocalStoragePersist {
  key: string;
  value: string;
}
