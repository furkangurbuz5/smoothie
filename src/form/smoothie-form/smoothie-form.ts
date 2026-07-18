import { ChangeDetectionStrategy, Component, inject, OnInit, signal, Signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-smoothie-form',
  imports: [ReactiveFormsModule],
  templateUrl: './smoothie-form.html',
  styleUrl: './smoothie-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmoothieForm implements OnInit {
  fb: FormBuilder = inject(FormBuilder);

  title: Signal<string> = signal('smoothie');

  smoothieForm: FormGroup = this.fb.group({
    id: 1,
    name: '',
    text: '',
  });

  ngOnInit() {
    console.log(this.title());
    this.populateSmoothieForm();
  }

  protected onClick() {
    this.smoothieForm.patchValue({
      name: 'Miles',
      text: 'Er is op de knop gedrukt!',
    });
  }

  private populateSmoothieForm() {
    this.smoothieForm.patchValue({
      name: 'Furkan',
      text: 'Dit is een voorbeeld reactive form!',
    });
  }
}
