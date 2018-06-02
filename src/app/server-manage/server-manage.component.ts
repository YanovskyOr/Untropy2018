import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'server-manage',
  templateUrl: './server-manage.component.html',
  styleUrls: ['./server-manage.component.scss']
})
export class ServerManageComponent implements OnInit {

  @Input() server;
  @Input() checks;

  constructor() { }

  ngOnInit() {
    
  }
}
