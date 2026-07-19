import { Component, signal, WritableSignal } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { TreeComponent } from './tree/tree.component';

@Component({
  selector: 'app-root',
  imports: [
    DashboardComponent,
    TableComponent,
    NavigationComponent,
    DragDropComponent,
    TreeComponent,
  ],
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
