import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Querya } from '../querya';
import { Queryb } from '../queryb';
import { Queryres } from '../queryres';
import { Queryares } from '../queryares';
import { Querybres} from "../querybres";

import { Querycres } from '../querycres';


@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.scss']
})
export class QueriesComponent implements OnInit {
  

  readonly url = "http://uvo10ntf2e964aukvam.vm.cld.sr/servers";
  status =["critical","warning","ok"];
  time=[5,10,20,30,100000];

  querya =new Querya("",null);
  queryb =new Queryb("",null,null,null);
  submitted=false;

  public queryres : Queryres[];
  public querybres : Querybres[];
  public queryares : Queryares[];

  public querycres: Querycres[];

  constructor(private http: HttpClient) { };

  getQuerya(status: string, time: number){//move to maybe service?
    
    let data = "/querya"+"/"+ status +"/"+time;
    this.submitted=true;
    return this.http.get<Queryres[]>(this.url+data).subscribe((data1=>{this.queryres=data1}),
    err => console.error(err), () => console.log('got result of query a'));
  }


  getQueryb(name: string, numofok: number,numofwarn: number,numofcrit: number){//move to maybe service?

    let data = "/queryb"+"/"+ name +"/"+numofok+"/"+numofwarn+"/"+numofcrit;
    this.submitted=true;
    return this.http.get<Querybres[]>(this.url+data).subscribe((data1=>{this.querybres=data1}),
    err => console.error(err), () => console.log('got result of query b'));
  }

  getQueryc(){
    return this.http.get<Querycres[]>("http://uvo10ntf2e964aukvam.vm.cld.sr/servers/health").subscribe((data1=>{this.querycres=data1}),
    err => console.error(err), () => console.log('got result of query c'));
  }

  
  get data1(){return JSON.stringify(this.data1);}
  get diagnostic() { return JSON.stringify(this.queryb); }

  


  ngOnInit() {
  }

}
