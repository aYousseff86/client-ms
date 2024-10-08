import {Component, input, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client-ms';
  protected list = input<number[]>();
  private initialValue = signal<number>(0);

  name!: string
  private address =  {}

  add = () => {}
  remove = () => {}
}
