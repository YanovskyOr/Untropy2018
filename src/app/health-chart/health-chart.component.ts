import { Component } from '@angular/core'; 

@Component({ 
    selector: 'chart-health-component',
    templateUrl: 'health-chart.component.html',
}) 

export class HealthChartComponent {

    public chartType:string = 'doughnut';
        
    public chartData:Array<any> = [5, 3, 2, 2];

    public chartLabels:Array<any> = ['Good','Warning','Critical',   'Unknown'];

    public chartColors:Array<any> = [{
        hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'], 
        hoverBorderWidth: 0, 
        backgroundColor: [ "#46BFBD","#FDB45C","#F7464A",  "#949FB1", "#4D5360"], 
        hoverBackgroundColor: ["#5AD3D1","#FFC870","#FF5A5E",   "#A8B3C5","#616774"]
    }];

    public chartOptions:any = { 
        responsive: true
    };

    public chartClicked(e: any): void { 
         
    } 

    public chartHovered(e: any): void { 
         
    }
}
