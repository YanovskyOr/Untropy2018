import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}


// export class HeaderComponent {
//   constructor(private router: Router) {} 
//   goDashboard() {  
//     this.router.navigate(['dashboard']);  
//   }  

//   goServers() {  
//     this.router.navigate(['servers']);  
//   }  

//   goAdmin() {  
//     this.router.navigate(['admin']);  
//   }  
// }


