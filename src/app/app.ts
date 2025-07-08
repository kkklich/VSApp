import { Component } from '@angular/core';
import { MainPageComponent } from './components/main-page/main-page';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [MainPageComponent],
  // standalone: false
})
export class App {
  protected title = 'VSApp';
}
