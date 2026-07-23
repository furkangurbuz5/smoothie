import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponse } from '../dto/product.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DummyJsonClient {
  private readonly httpClient: HttpClient = inject(HttpClient);

  getProducts(): Observable<ProductResponse> {
    return this.httpClient.get<ProductResponse>('https://dummyjson.com/products');
  }
}
