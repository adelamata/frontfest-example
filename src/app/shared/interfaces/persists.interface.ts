export interface PersistInterface<T> {
  add(param: T): void;
  remove(param: T): void;
}
