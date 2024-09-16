import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-signals-tiy',
  standalone: true,
  imports: [MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './signals-tiy.component.html',
  styleUrl: './signals-tiy.component.scss',
})
export class SignalsTiyComponent {
  count = 0;
  digits: string[] = [];
  setTo: number = 0;
  tickSpeed = 1000;
  countDiff: number = 1;
  runTimer = false;
  countUp = true;
  interval!: any;

  constructor() {
    this.prepareInterval(this.tickSpeed);
  }

  prepareInterval(tickSpeed: number) {
    clearInterval(this.interval);
    this.interval = setInterval(() => this.updateCount(), tickSpeed);
  }

  updateCount() {
    this.count += 1;
  }
}
