import { Component } from '@angular/core';
import { MainPageComponent } from "./components/main-page/main-page";

@Component({
  selector: 'app-root',
  // imports: [MainPageComponent],
  templateUrl: './app.html',
  // imports: [MainPageComponent]
})
export class App {
  protected title = 'VSApp';
}
