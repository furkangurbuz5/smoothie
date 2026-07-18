import { Component, signal, WritableSignal } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  imports: [DashboardComponent, TableComponent, NavigationComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  slideToggled: WritableSignal<boolean> = signal(false);
  protected readonly title = signal('smoothie');

  onSlideToggle(change: MatSlideToggleChange): void {
    this.slideToggled.set(change.checked);
  }
}
