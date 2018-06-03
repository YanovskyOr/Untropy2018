import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { Check } from '../check';

@Component({
  selector: 'checks',
  templateUrl: './checks.component.html',
  styleUrls: ['./checks.component.scss']
})
export class ChecksComponent implements OnInit {

  public checks: Check[];

  constructor(private serversService : ServersService) { }


  interval: any;
  
  ngOnInit() {
    this.getChecks();

    this.interval = setInterval(() => {
      this.getChecks();
    }, 1000 * 60);
  }
  getChecks() {
    this.serversService.getChecks().subscribe(
      data => { this.checks = data },
      err => console.error(err), () => console.log('done loading checks for servers-page'));
  }
}
