import { inject, Injectable } from '@angular/core';
import { DummyJsonClient } from '../client/dummy-json-client';
import { map } from 'rxjs/operators';
import { mapProductDtoToProductModel, ProductResponse } from '../dto/product.dto';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class DummyJsonService {
  private readonly dummyJsonClient: DummyJsonClient = inject(DummyJsonClient);

  getProducts() {
    return this.dummyJsonClient.getProducts().pipe(
      map((productResponse: ProductResponse): Product[] => {
        return productResponse.products.map(mapProductDtoToProductModel);
      }),
    );
  }
}
