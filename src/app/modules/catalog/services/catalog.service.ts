import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'src/app/shared/services/localstorage.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/model.interface';

@Injectable()
export class CatalogService {

  constructor(private readonly http: HttpClient, private readonly localStorageService: LocalStorageService) { }

  getProducts(): Observable<any> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products?limit=5');
  }
}
