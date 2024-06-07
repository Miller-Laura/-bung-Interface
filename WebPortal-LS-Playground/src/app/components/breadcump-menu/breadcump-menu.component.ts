import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-breadcump-menu',
  standalone: true,
  imports: [RouterOutlet, MatCard],
  templateUrl: './breadcump-menu.component.html',
  styleUrl: './breadcump-menu.component.scss',
})
export class BreadcumpMenuComponent {}
