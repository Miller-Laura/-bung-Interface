import { Component, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'lib-signals-tiy-loesung',
  standalone: true,
  imports: [MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './signals-tiy-loesung.component.html',
  styleUrl: './signals-tiy-loesung.component.scss',
})
export class SignalsTiyLoesungComponent {
  count = signal(0);
  digits: string[] = [];
  setTo: number = 0;
  tickSpeed = signal(1000);
  countDiff: number = 1;
  runTimer = signal(false);
  countUp = true;
  interval!: any;

  constructor() {
    effect(() => {
      this.digits = this.count().toString().split('');
    });
    effect(() => this.prepareInterval(this.runTimer(), this.tickSpeed()));
  }

  prepareInterval(runTimer: boolean, tickSpeed: number) {
    clearInterval(this.interval);
    if (runTimer) {
      this.interval = setInterval(() => this.updateCount(), tickSpeed);
    }
  }

  updateCount() {
    this.count.update((value) => {
      return this.countUp ? value + this.countDiff : value - this.countDiff;
    });
  }

  setRunTimer(run: boolean) {
    this.runTimer.set(run);
  }

  setCountDirection(countUp: boolean) {
    this.countUp = countUp;
  }

  setCountTo() {
    this.count.set(this.setTo);
  }

  resetTimer() {
    this.count.set(0);
    this.setTo = 0;
    this.tickSpeed.set(1000);
    this.countDiff = 1;
    this.runTimer.set(false);
  }
}
