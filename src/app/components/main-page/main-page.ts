import { Component } from '@angular/core';
import { stockData } from '../../Models/models/Stock-model';
import { CompaniesTickerModel } from '../../Models/models/Companies-prefix-model';
import { LoadCSVService } from '../../Services/load-csv.service';
import { ApiHttpService } from '../../Services/api-http.service';
import { ChartService } from '../../Services/chart.service';
import { firstValueFrom } from 'rxjs';

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
    private readonly loadCSV: LoadCSVService,
    private readonly apiHttpService: ApiHttpService,
    private readonly chartService: ChartService
  ) { }

  ngOnInit(): void {
    this.loadCompanyList();
  }

  private loadCompanyList(): void {
    this.loadJSONFile('companies_WSE.json').then(res => {
      this.companyList = res;
    });
  }

  public uploadCSV(event: any) {
    this.loadCSV.uploadDocument(event).then(res => {
      this.records = res;
    });
  }

  public changeCompany() {
    this.chartService.getAPICompanyRequest(this.selectedCompany.ticker);
  }
  public async loadJSONFile(fileName: string): Promise<CompaniesTickerModel[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const data: CompaniesTickerModel[] = await firstValueFrom(this.apiHttpService.get(`/assets/${fileName}`));
        resolve(data);
      } catch (e) {
        reject(e);
      }
    });
  }

}
