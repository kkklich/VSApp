import { Component } from '@angular/core';
import { stockData } from '../../Models/models/Stock-model';
import { TwelveApiService } from '../../Services/twelve-api.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ChartComponent } from "../chart/chart.component";

@Component({
  selector: 'app-main-page',
  // imports: [MatFormFieldModule,
  //   MatInputModule,
  //   MatButtonModule,
  //   FormsModule, ChartComponent],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
  standalone: false,
})
export class MainPageComponent {
  public records: stockData[] = [];

  public textCompany: string = "";


  constructor(private readonly twelveApiService: TwelveApiService
  ) {
  }


  public changeCompany() {
    this.twelveApiService.getAPICompanyRequest(this.textCompany);
  }

}
