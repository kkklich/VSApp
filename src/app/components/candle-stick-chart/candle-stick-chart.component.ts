import { ChangeDetectionStrategy, Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexTitleSubtitle,
  ChartComponent
} from 'ng-apexcharts';
import { stockData } from '../../Models/models/Stock-model';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-candle-stick-chart',
  templateUrl: './candle-stick-chart.component.html',
  styleUrls: ['./candle-stick-chart.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CandleStickChartComponent implements OnInit {
  @Input() chartData: stockData[] = [];

  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: ChartOptions;

  constructor() { }

  ngOnInit(): void {
    this.initializeChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Changes detected:', this.chartOptions, changes['chartData'], this.chartData);
    if (this.chartOptions && changes['chartData'] && this.chartData) {
      this.chartOptions.series = [{
        data: this.chartData.map((data) => ({
          x: new Date(data.date),
          y: [data.open, data.high, data.low, data.close],
        })),
      }];
      this.resetYAxis();
    }
  }

  private initializeChart() {
    this.chartOptions = {
      series: [
        {
          data: this.chartData.map((data) => ({
            x: data.date.toISOString().slice(0, 10),
            y: [data.open, data.high, data.low, data.close],
          })),
        },
      ],
      chart: {
        type: 'candlestick',
        height: 550,
        animations: {
          enabled: true
        },
        zoom: {
          enabled: true,
          type: 'x',
          autoScaleYaxis: false,
        },
        toolbar: {
          tools: {
            zoom: true,
            pan: true,
          },
        },
        events: {
          zoomed: (chartContext, { xaxis, yaxis }) => {
            console.log('Zoomed:', chartContext, xaxis, yaxis);
            this.resetYAxis();
            // this.onChartInteracted('zoomed', xaxis.min, xaxis.max);
          },
          scrolled: (chartContext, { xaxis }) => {
            // this.onChartInteracted('scrolled', xaxis.min, xaxis.max);
          },
          beforeZoom: (chartContext, { xaxis }) => {
            // this.onChartInteracted('beforeZoom', xaxis.min, xaxis.max);
            return { xaxis }; // important to return the xaxis range
          },
        }
      },
      title: {
        text: 'Candlestick Chart Example',
        align: 'left',
      },
      xaxis: {
        type: 'category', // use category axis instead of datetime
        labels: {
          rotate: -45, // optional for readability
        }
      },
      yaxis: {
        min: undefined,
        max: undefined,
        tooltip: {
          enabled: false,
        },
      },
    };
  }



  resetYAxis() {//TODO please get only data from visible range    
    console.log('Resetting Y-axis');
    if (!this.chartData.length) return;

    const allValues = this.chartData.flatMap(d => d.low);
    const minY = Math.min(...allValues);
    const maxY = Math.max(...allValues);

    this.chartOptions.yaxis.min = minY - (maxY - minY) * 0.1;  // 10% padding
    this.chartOptions.yaxis.max = maxY + (maxY - minY) * 0.1;
    console.log('Resetting Y-axis:', this.chartOptions.yaxis.min, this.chartOptions.yaxis.max);
  }

  handleZoom(xMin: number, xMax: number) {
    if (!this.chartData.length) return;

    // Filter data inside zoom range
    const visibleData = this.chartData.filter(d => {
      const time = typeof d.date === 'string' ? new Date(d.date).getTime() : d.date.getTime();
      return time >= xMin && time <= xMax;
    });

    if (visibleData.length === 0) return;

    // Find min/max in visible range
    const visibleYs = visibleData.flatMap(d => d.low);
    const minY = Math.min(...visibleYs);
    const maxY = Math.max(...visibleYs);

    // Update yaxis dynamically with some padding
    this.chartOptions.yaxis.min = minY - (maxY - minY) * 0.1;
    this.chartOptions.yaxis.max = maxY + (maxY - minY) * 0.1;

    // Force chart update
    this.chart.updateOptions(
      {
        yaxis: {
          min: this.chartOptions.yaxis.min,
          max: this.chartOptions.yaxis.max,
        },
      },
      false,
      false,
      false
    );
  }

}
