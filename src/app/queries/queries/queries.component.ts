import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Querya } from '../querya';


@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.scss']
})
export class QueriesComponent implements OnInit {

  readonly url = "http://uvo10ntf2e964aukvam.vm.cld.sr/servers/querya";
  status =["critical","Warning","ok"];
  time=[5,10,20,30,100000];

  query =new Querya("",null);
  submitted=false;
  constructor(private http: HttpClient) { };

  getQuerya(status: string, time: number){//move to maybe service?
    
    let data = "/"+ status +"/"+time;
    this.submitted=true;
    return this.http.get(this.url+data).subscribe((data1:any[])=>{console.log(data1)});
    
  }
  get diagnostic() { return JSON.stringify(this.query); }

  


  ngOnInit() {
  }

}
