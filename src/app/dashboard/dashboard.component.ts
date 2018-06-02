import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Server } from '../server';
import { Observable } from 'rxjs/Observable';
import { ServersService } from '../servers.service'

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  
  public servers: Server[];

  constructor(private serversService : ServersService ) { }

  interval: any;

  ngOnInit() {
    this.getServers();

    this.interval = setInterval(() => {
      this.getServers();
    }, 1000*20);
}

getServers() {
  this.serversService.getServers().subscribe(
          data => { this.servers = data},
           err => console.error(err), () => console.log('done loading servers'));
}

}