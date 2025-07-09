import { Component } from '@angular/core';
import { stockData } from '../../Models/models/Stock-model';
import { TwelveApiService } from '../../Services/twelve-api.service';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { ChartComponent } from "../chart/chart.component";
import { CompaniesTickerModel } from '../../Models/models/Companies-prefix-model';
import { LoadCSVService } from '../../Services/load-csv.service';
import { ApiHttpService } from '../../Services/api-http.service';
import { ChartService } from '../../Services/chart.service';
import { firstValueFrom } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.html',
  styleUrls: ['./main-page.scss'],
  standalone: false
})
export class MainPageComponent {

  public companyArray: any[] = [{ name: "PKN ORLEN", symbol: "PKN" }, { name: "XTB", symbol: "XTB" }];
  public selectedMedia: any;
  public records: stockData[] = [];
  public selectedCompany: CompaniesTickerModel = { name: "PKN ORLEN", ticker: "PKN" }
  public companyList: CompaniesTickerModel[] = [];



  constructor(
  ) {
    // this.loadJSONFile('companies_WSE.json').then(res => {
    //   this.companyList = res;
    // })
  }


  // public uploadCSV(event: any) {
  //   this.loadCSV.uploadDocument(event).then(res => {
  //     this.records = res;
  //   });
  // }

  // public changeCompany() {
  //   this.chartService.getAPICompanyRequest(this.selectedCompany.ticker);
  // }
  // public async loadJSONFile(fileName: string): Promise<CompaniesTickerModel[]> {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       const data: CompaniesTickerModel[] = await firstValueFrom(this.apiHttpService.get(`/assets/${fileName}`));
  //       resolve(data);
  //     } catch (e) {
  //       reject(e);
  //     }
  //   });
  // }

}
