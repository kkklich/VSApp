import { Injectable } from "@angular/core";
import { Interval } from "../Models/Interfaces/enums/interval-time.enum";
import { stockData } from "../Models/models/Stock-model";
import { ApiHttpService } from "./api-http.service";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ChartService {

    private loadedStockData: stockData[] = [];
    private stooqSubscription: Subject<stockData[]> = new Subject();

    constructor(private apiHttpService: ApiHttpService) { }

    public getStooqDateSubscribe(): Observable<stockData[]> {
        return this.stooqSubscription;
    }

    public getAPICompanyRequest(companyPrefix: string) {
        const model = {
            prefix: companyPrefix,
            interval: Interval.day
        }

        console.log(model)
        // this.apiHttpService.get<any>(`${environment.apiUrl}quotes/GetStockData?prefix=${companyPrefix}&&interval=${Interval.day}`).subscribe(result => {
        //     console.log(result);
        //     // this.loadedStockData = [];
        //     // result.map(x => x.date = new Date(x.date));
        //     // this.loadedStockData = result;
        //     // this.stooqSubscription.next(this.loadedStockData)
        // })
    }
}