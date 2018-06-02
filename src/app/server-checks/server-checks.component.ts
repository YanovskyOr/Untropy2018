import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'server-checks',
  templateUrl: './server-checks.component.html',
  styleUrls: ['./server-checks.component.scss']
})
export class ServerChecksComponent implements OnInit {

  @Input() server;
  @Input() checks;

  checksResult : number[];

  constructor() { }

  ngOnInit() {
    this.ChecksResult();
  }

  public ChecksResult(){
      this.checksResult = this.server.result.split("");
      // console.log(this.checksResult);
  }


}
