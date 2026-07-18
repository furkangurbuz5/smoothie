import { Component, signal } from '@angular/core';
import { SmoothieForm } from '../form/smoothie-form/smoothie-form';

@Component({
  selector: 'app-root',
  imports: [SmoothieForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('smoothie');
}
