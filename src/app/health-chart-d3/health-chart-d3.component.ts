import { Component, ElementRef, Input, OnChanges, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { Server } from '../server';
import { ServersService } from '../servers.service'
import * as d3 from 'd3';
import { color } from 'd3';

@Component({
  selector: 'health-chart-d3',
  templateUrl: './health-chart-d3.component.html',
  styleUrls: ['./health-chart-d3.component.scss']
})
export class HealthChartD3Component implements OnInit, OnChanges {

  @Input() servers;

  // margin = { top: 20, right: 20, bottom: 30, left: 40 };

  // @ViewChild('chart')
  // private chartContainer: ElementRef;

  constructor(private serversService: ServersService) { }

  public chartData: Array<number> = [1, 1, 1, 1];

  ngOnChanges(): void {
    if (!this.servers) { return; }

    this.createHealthChart();
  }

  private createHealthChart(): void {
    d3.select('#svg1').remove();
    this.healthChartUpdate();

    const data = this.chartData;

    const chartLabels: Array<string> = ['Good', 'Warning', 'Critical', 'Unknown'];

    var pie = d3.pie()
      .sort(null)
      .value(d => d.valueOf());

    var arc = d3.arc()
      .innerRadius(50)
      .outerRadius(100)

    const svg1 = d3.select("#healthChart")
      .append("svg")
      .attr("id", "svg1")
      .attr("width", 200)
      .attr("height", 200);

      function colors(n) {
        var colores = ["#43A047", "#ffb74d", "#F7464A", "#949FB1", "#4D5360"];
        return colores[n % colores.length];
      }
    svg1.append("g")
      .attr("transform", "translate(100, 100)")
      .selectAll("path")
      .data(pie(this.chartData))
      .enter()
      .append("path")
      .style("fill", function(d,i) { return colors(i); })
      .attr("d", <any>arc);

  }

  interval: any;
  goodCount: number = 0;
  warningCount: number = 0;
  criticalCount: number = 0;
  unknownCount: number = 0;

  public healthChartUpdate() {
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
    console.log(this.chartData)
  }

  ngOnInit() {
    setTimeout(() => {
      this.healthChartUpdate();
    }, 1000);
    this.interval = setInterval(() => {
      this.healthChartUpdate();
      console.log("updating chart")
    }, 1000 * 10);
  }
}



