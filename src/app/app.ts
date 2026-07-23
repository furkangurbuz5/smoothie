import { Component, inject, signal, WritableSignal } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { TreeComponent } from './tree/tree.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { take } from 'rxjs';
import { DummyJsonService } from './service/dummy-json.service';
import { Product } from './model/product.model';

@Component({
  selector: 'app-root',
  imports: [
    DashboardComponent,
    TableComponent,
    DragDropComponent,
    TreeComponent,
    AddressFormComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  slideToggled: WritableSignal<boolean> = signal(false);
  protected readonly title = signal('smoothie');

  private readonly dummyJsonService: DummyJsonService = inject(DummyJsonService);

  onSlideToggle(change: MatSlideToggleChange): void {
    this.slideToggled.set(change.checked);
  }

  ngOnInit(): void {
    this.dummyJsonService
      .getProducts()
      .pipe(take(1))
      .subscribe((products: Product[]) => {
        products.forEach((product) => {
          if (product.price > 40) {
            console.log(product);
          }
        });
      });
  }
}
