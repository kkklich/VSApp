import { Injectable } from "@angular/core";
import { stockData } from "../Models/models/Stock-model";
import { ApiHttpService } from "./api-http.service";
import { Interval } from "../Models/Interfaces/enums/interval-time.enum";

@Injectable({
    providedIn: 'root'
})
export class TwelveApiService {

    private readonly apiBaseUrl = 'https://vsapi.onrender.com';
    private loadedStockData: stockData[] = [];

    constructor(private apiHttpService: ApiHttpService) { }


    public getAPICompanyRequest(companyPrefix: string) {
        // const model = {
        //     prefix: companyPrefix,
        const interval = Interval.day;
        // }

        // console.log(model)
        // this.apiHttpService.get<any>(`${environment.apiUrl}quotes/GetStockData?prefix=${companyPrefix}&&interval=${Interval.day}`).subscribe(result => {
        this.apiHttpService.get<any>(`${this.apiBaseUrl}/stock/?interval=${interval}&symbol=${companyPrefix} `).subscribe(result => {
            console.log(result);

        })
    }

}