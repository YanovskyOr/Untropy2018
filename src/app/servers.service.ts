import { Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Server } from './server';
import { Check } from './check';
import { Location } from './maplocation';
import { Observable } from 'rxjs/Observable';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

@Injectable()
export class ServersService {

  readonly ROOT_URL = 'http://uvo10ntf2e964aukvam.vm.cld.sr';
  
  getServers() {
    console.log("getting servers");

    return this.http.get<Server[]>(this.ROOT_URL + '/servers', {headers:{'Content-Type':'application/json', }});
  }

  getChecks() {
    console.log("getting checks");
    return this.http.get<Check[]>(this.ROOT_URL + '/checks');
  }

  getMapLocations(){
    console.log("getting checks");
    return this.http.get<Location[]>(this.ROOT_URL + '/locations');
  }

  checkNow() {
    console.log("initiating checks");
    return this.http.get<Check[]>(this.ROOT_URL + '/servers/ssh');
  }
  
  constructor(private http:HttpClient) { }

  ngOnInit(){
  }
}

