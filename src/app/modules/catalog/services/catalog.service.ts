import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'src/app/shared/services/localstorage.service';
import { Observable } from 'rxjs';

@Injectable()
export class CatalogService {

  constructor(private readonly http: HttpClient, private readonly localStorageService: LocalStorageService) { }

  getProducts(): Observable<any> {
    return this.http.get<any>('https://fakestoreapi.com/products?limit=5')
  }
}
