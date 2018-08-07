import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Querya } from '../querya';
import { Queryb } from '../queryb';


@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.scss']
})
export class QueriesComponent implements OnInit {

  readonly url = "http://uvo10ntf2e964aukvam.vm.cld.sr/servers";
  status =["critical","Warning","ok"];
  time=[5,10,20,30,100000];

  querya =new Querya("",null);
  queryb =new Queryb("",null,null,null);
  submitted=false;
  constructor(private http: HttpClient) { };

  getQuerya(status: string, time: number){//move to maybe service?
    
    let data = "/querya"+"/"+ status +"/"+time;
    this.submitted=true;
    return this.http.get(this.url+data).subscribe((data1:any[])=>{console.log(data1)});
  }


  getQueryb(name: string, numofok: number,numofwarn: number,numofcrit: number){//move to maybe service?
    
    let data = "/queryb"+"/"+ name +"/"+numofok+"/"+numofwarn+"/"+numofcrit;
    this.submitted=true;
    return this.http.get(this.url+data).subscribe((data1:any[])=>{console.log(data1)});
  }




  get diagnostic() { return JSON.stringify(this.queryb); }

  


  ngOnInit() {
  }

}
