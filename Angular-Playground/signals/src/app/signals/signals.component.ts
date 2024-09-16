import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
  ],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
})
export class SignalsComponent {
  showCount = signal(true);
  count = signal(0);
  newCountValue = 0;
  doubleCount = computed(() => this.count() * 2);
  logs: string[] = [];

  constructor() {
    effect(() => {
      this.logMessage('DoubleCount has changed to:', this.doubleCount());
      this.logMessage('Show count has changed to:', this.showCount());
    });
    effect(() => this.logChangedCount(this.count()));
  }

  logChangedCount(count: number) {
    this.logMessage('Count has changed to:', count);
  }

  conditionalCount = computed(() => {
    if (this.showCount()) {
      return `Double count is ${this.doubleCount()}.`;
    } else {
      this.logMessage(
        'This line will only be logged when showCount is changed to false.'
      );
      return 'Nothing to see here!';
    }
  });

  increaseCount() {
    this.count.update((value) => value + 1);
  }

  decreaseCount() {
    this.count.update((value) => value - 1);
  }

  setNewCount() {
    this.count.set(this.newCountValue);
  }

  logMessage(...args: any) {
    console.log(args.join(' '));
    this.logs = [...this.logs, args.join(' ')];
  }

  clearLogs() {
    this.logs = [];
  }
}
