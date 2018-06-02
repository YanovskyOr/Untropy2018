import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.scss']
})
export class AddServerComponent implements OnInit {

  constructor(private http:HttpClient) { }

  @Input() public checks;

  ngOnInit() {

  }

  addServer(){


    const url =  "http://uvo10ntf2e964aukvam.vm.cld.sr/servers";
    let data = "name=uvo12w8j86no38rsnm1.vm.cld.sr&ip=91.199.215.36&checks=1111111111111111111111111111111111111111111111111";

    this.http.post(url, data,{headers:{'Content-Type':'application/x-www-form-urlencoded' }},
  ).subscribe(
    (val) => {
        console.log("POST call successful value returned in body", val);
    },
    response => {
        console.log("POST call in error", response);
    },
    () => {
        console.log("The POST observable is now completed.");
    });
}


}

