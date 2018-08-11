import { Component, ElementRef, Input, OnChanges, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { Server } from '../server';
import { ServersService } from '../servers.service'
import * as d3 from 'd3';

@Component({
  selector: 'results-chart-d3',
  templateUrl: './results-chart-d3.component.html',
  styleUrls: ['./results-chart-d3.component.scss']
})
export class ResultsChartD3Component implements OnInit {

  @Input() servers;

  constructor(private serversService: ServersService) { }

  public resChartData: Array<number> = [1, 1, 1, 1, 1];

  ngOnChanges(): void {
    if (!this.servers) { return; }
    this.createResChart();
  }

  private createResChart(): void {
    d3.select('#svg2').remove();
    this.resChartUpdate();

    const data = this.resChartData;

    const chartLabels: Array<string> = ["Ok", "Warning", "Critical", "Don't Run", "Unknown"];

    var pie = d3.pie()
      .sort(null)
      .value(d => d.valueOf());

    var arc = d3.arc()
      .innerRadius(50)
      .outerRadius(100)

    const svg2 = d3.select("#resultsChart")
      .append("svg")
      .attr("id", "svg2")
      .attr("width", 200)
      .attr("height", 200);

      function colors(n) {
        var colores = ["#43A047", "#ffb74d", "#F7464A", "#4D5360", "#949FB1"];
        return colores[n % colores.length];
      }
    svg2.append("g")
      .attr("transform", "translate(100, 100)")
      .selectAll("path")
      .data(pie(this.resChartData))
      .enter()
      .append("path")
      .style("fill", function(d,i) { return colors(i); })
      .attr("d", <any>arc);
  }

  interval: any;
  okCount: number = 0;
  warningCount: number = 0;
  criticalCount: number = 0;
  dontRunCount: number = 0;
  unknownCount: number = 0;
  checksResult : number[];

  public resChartUpdate() {
    this.dontRunCount = 0;
    this.unknownCount = 0;
    this.okCount = 0;
    this.warningCount = 0;
    this.criticalCount = 0;
    
    for (let server of this.servers) {
      this.checksResult = server.result.split("");
      for(let i in this.checksResult)
      {
        if(this.checksResult[i] == 0)
        {
            this.dontRunCount++;
        }
        if(this.checksResult[i] == 1)
        {
          this.unknownCount++;
        }
        if(this.checksResult[i] == 2)
        {
         this.okCount++; 
        }
        if(this.checksResult[i] == 3)
        {
          this.warningCount++;
        }
        if(this.checksResult[i] == 4)
        {
          this.criticalCount++;
        }
      }
    }
    this.resChartData = [];
    this.resChartData.push(this.okCount);
    this.resChartData.push(this.warningCount);
    this.resChartData.push(this.criticalCount);
    this.resChartData.push(this.dontRunCount);
    this.resChartData.push(this.unknownCount);
    console.log(this.resChartData)
  }

  ngOnInit() {
    setTimeout(() => {
      this.resChartUpdate();
    }, 1000);
    this.interval = setInterval(() => {
      this.resChartUpdate();
      console.log("updating chart")
    }, 1000 * 10);
  }
}

