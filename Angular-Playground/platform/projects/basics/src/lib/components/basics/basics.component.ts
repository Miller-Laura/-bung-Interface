import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'lib-basics',
  imports: [MatInputModule, FormsModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './basics.component.html',
  styleUrl: './basics.component.scss',
})
export class BasicsComponent {
  title = 'Basics';
  textValue = 'test';

  onClick() {
    this.textValue = 'Das tat weh!';
  }
}
