import { inject, Injectable } from '@angular/core';
import { DummyJsonClient } from '../client/dummy-json-client';
import { map } from 'rxjs/operators';
import { mapProductDtoToProductModel } from '../dto/product.dto';

@Injectable({
  providedIn: 'root',
})
export class DummyJsonService {
  private readonly dummyJsonClient: DummyJsonClient = inject(DummyJsonClient);

  getProducts() {
    return this.dummyJsonClient.getProducts().pipe(
      map((productResponse) => {
        return productResponse.products;
      }),
      map((products) => {
        return products.map(mapProductDtoToProductModel);
      }),
    );
  }
}
