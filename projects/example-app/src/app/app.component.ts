import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DateTimePickerComponent } from '@mehedihasansjs/date-time-picker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DateTimePickerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'example-app';
}
