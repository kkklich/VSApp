import { Component } from '@angular/core';
import { MainPageComponent } from "./components/main-page/main-page";
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  imports: [AppModule],
  templateUrl: './app.html'
})
export class App {
  protected title = 'VSApp';
}
