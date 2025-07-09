import { Component } from '@angular/core';
import { MainPageComponent } from './components/main-page/main-page';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false
})
export class AppComponent {
  protected title = 'VSApp';
}
