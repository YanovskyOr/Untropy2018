import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Server } from './server';
import { Check } from './check';
import { Observable } from 'rxjs/Observable';
import { ServersService } from './servers.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  public servers: Server[];
  public checks: Check[];

  constructor(private serversService: ServersService) { }

  interval: any;

  ngOnInit() {
    this.getServers();
    this.getChecks();

    this.interval = setInterval(() => {
      this.getServers();
      this.getChecks();
    }, 1000 * 20);

  }

  getServers() {
    this.serversService.getServers().subscribe(
      data => { this.servers = data },
      err => console.error(err), () => console.log('done loading servers'));
  }

  getChecks() {
    this.serversService.getChecks().subscribe(
      data => { this.checks = data },
      err => console.error(err), () => console.log('done loading checks'));
  }

}

// TimerObservable.create(0, 1000*60*2)
// .subscribe(() => this.getServers())


