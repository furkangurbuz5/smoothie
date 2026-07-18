import { Component, Signal, signal, WritableSignal } from '@angular/core';
import { SmoothieForm } from '../form/smoothie-form/smoothie-form';
import { MatSlideToggle, MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  imports: [SmoothieForm, MatSlideToggle],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('smoothie');

  slideToggled: WritableSignal<boolean> = signal(false);

  onSlideToggle(change: MatSlideToggleChange): void {
    this.slideToggled.set(change.checked);
  };
}
