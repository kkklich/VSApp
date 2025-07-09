import { NgModule } from '@angular/core';
import { LoadCSVService } from './Services/load-csv.service';
import { ChartComponent } from './components/chart/chart.component';
import { PatternService } from './Services/pattern.service';
import { ApiHttpService } from './Services/api-http.service';
import { ChartService } from './Services/chart.service';
import { TwelveApiService } from './Services/twelve-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MainPageComponent } from './components/main-page/main-page';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        MainPageComponent
    ],
    exports: [
        MainPageComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        MatIconModule
    ],
    providers: [
        LoadCSVService,
        PatternService,
        // ApiHttpService,
        ChartService,
        TwelveApiService
    ]
})
export class AppModule { }
