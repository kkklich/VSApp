import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // ✅ Make sure this points to the actual file exporting AppModule

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
