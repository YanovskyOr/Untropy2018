import { Component, OnInit, Input } from '@angular/core';
import { Server } from '../server';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'servers-status',
  templateUrl: './servers-status.component.html',
  styleUrls: ['./servers-status.component.scss']
})
export class ServersStatusComponent implements OnInit {

  @Input() servers
  constructor() { }

  ngOnInit() {
  
  }
}
