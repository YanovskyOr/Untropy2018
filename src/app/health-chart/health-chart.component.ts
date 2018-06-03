import { Component, Input, OnInit } from '@angular/core';
import { Server } from '../server';
import { ServersService } from '../servers.service'

@Component({
    selector: 'chart-health-component',
    templateUrl: 'health-chart.component.html',
})

export class HealthChartComponent implements OnInit {

    //public servers: Server[];
    @Input() servers;

    constructor(private serversService: ServersService) { }


    public chartType: string = 'doughnut';
    public chartData: Array<any> = [1, 1, 1, 1];

    //public chartData: Array<any> = [1,1,1,1];

    public chartLabels: Array<any> = ['Good', 'Warning', 'Critical', 'Unknown'];

    public chartColors: Array<any> = [{
        hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'],
        hoverBorderWidth: 0,
        backgroundColor: ["#43A047", "#ffb74d", "#F7464A", "#949FB1", "#4D5360"],
        hoverBackgroundColor: ["#4CAF50", "#ffcc80", "#FF5A5E", "#A8B3C5", "#616774"]
    }];

    public chartOptions: any = {
        responsive: true
    };

    public chartClicked(e: any): void {

    }

    public chartHovered(e: any): void {

    }

    interval: any;
    goodCount: number = 0;
    warningCount: number = 0;
    criticalCount: number = 0;
    unknownCount: number = 0;

    public chartUpdate() {
        this.goodCount = 0;
        this.warningCount = 0;
        this.criticalCount = 0;
        this.unknownCount = 0;
        for (let server of this.servers) {


            if (server.status == "ok") {
                
                this.goodCount++;
                // console.log("good = " + this.goodCount)
            }

            if (server.status == "warning") {
                this.warningCount++;
                // console.log("warning = " + this.warningCount)
            }

            if (server.status == "critical") {
                
                this.criticalCount++;
                // console.log("critical = " + this.criticalCount)
            }

            if (server.status == "unknown") {
                
                this.unknownCount++;
                // console.log("unknown = " + this.unknownCount)
            }
        }
        this.chartData = [];
        this.chartData.push(this.goodCount)
        this.chartData.push(this.warningCount)
        this.chartData.push(this.criticalCount)
        this.chartData.push(this.unknownCount)
        // console.log(this.chartData)
    }

    ngOnInit() {
        setTimeout(() => {
            this.chartUpdate();
        }, 1000);
        this.interval = setInterval(() => {
            this.chartUpdate();
            //console.log("updating chart")
        }, 1000 * 10);
    }
}
