import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'server-delete',
  templateUrl: './server-delete.component.html',
  styleUrls: ['./server-delete.component.scss']
})
export class ServerDeleteComponent implements OnInit {

  @Input() server;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  public deleteServer(_id:string){
    const url =  'http://uvo10ntf2e964aukvam.vm.cld.sr/servers/' + _id;
    this.http.delete(url).subscribe(
      (val) => {
          console.log("DELETE call successful value returned in body", val);
      },
      response => {
          console.log("DELETE call in error", response);
      },
      () => {
          console.log("The DELETE observable is now completed.");
      });
      setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

//   public reload(){
//     window.location.reload();
//   }
}
