import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { ServersService } from '../servers.service'
import { Server } from '../server';
import { Check } from '../check';
import { CollapseDirective } from 'angular-bootstrap-md/collapse'
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {


  public servers: Server[];
  public checks: Check[];

  constructor(private serversService : ServersService) { }
  
  interval: any;


  // @ViewChild('manageServerModal') public manageServerModal : ElementRef;
  // public kaki: string;

  // show(value:string){
  //   console.log("this ismodal")
  //   this.kaki = value;
  //   this.manageServerModal.nativeElement.show();
  // }


  ngOnInit() {
    this.getServers();
    this.getChecks();

    this.interval = setInterval(() => {
      this.getServers();
      this.getChecks();
    }, 1000 * 40);
  }

  getServers() {
    this.serversService.getServers().subscribe(
      data => { this.servers = data },
      err => console.error(err), () => console.log('done loading servers for servers-page'));
  }

  getChecks() {
    this.serversService.getChecks().subscribe(
      data => { this.checks = data },
      err => console.error(err), () => console.log('done loading checks for servers-page'));
  }

}
