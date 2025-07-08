import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadCSVService } from './Services/load-csv.service';
import { HttpClientModule } from '@angular/common/http';
import { ChartComponent } from './components/chart/chart.component';
import { PatternService } from './Services/pattern.service';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ApiHttpService } from './Services/api-http.service';
import { ChartService } from './Services/chart.service';
import { TwelveApiService } from './Services/twelve-api.service';
import { MainPageComponent } from './components/main-page/main-page';
import { App } from './app';

@NgModule({
    declarations: [
        MainPageComponent,
        ChartComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        MatSelectModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatIconModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,

    ],
    providers: [
        LoadCSVService,
        PatternService,
        ApiHttpService,
        ChartService,
        TwelveApiService
    ],
    exports: [
        MainPageComponent
    ]
})
export class AppModule { }
