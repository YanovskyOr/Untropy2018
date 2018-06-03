import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';
// import { SELECT_MULTIPLE_VALUE_ACCESSOR } from '@angular/forms';


@Component({
    selector: 'add-server',
    templateUrl: './add-server.component.html',
    styleUrls: ['./add-server.component.scss']
})
export class AddServerComponent implements OnInit {

    constructor(private http: HttpClient) { }

    //   checks1=['var_log_mounted','tmp_log_mounted','home_log_mounted','home_log_mounted'];
    //    checks=[{check:'var_log_mounted',selected:0},{check:'tmp_log_mounted',selected:0},{check:'home_log_mounted',selected:0}]

    @Input() public checks;

    public selectedChecks: Array<number> = [];
    //   public selectedChecks : {check:any, selected:number};

    ngOnInit() {
        setTimeout(() => {
            for (let i = 0; i < this.checks.length; i++) {
                this.selectedChecks[i] = 0;
            }
            console.log(this.selectedChecks);
        }, 1000);
    }

    refreshChecks(){
        setTimeout(() => {
            for (let i = 0; i < this.checks.length; i++) {
                this.selectedChecks[i] = 0;
            }
            console.log(this.selectedChecks);
        }, 1000);
    }


    postServer(name: string, ip: string) {
        // console.log(name, ip);
        // console.log(this.selectedChecks)
        event.stopPropagation();
        event.preventDefault();

        const url = "http://uvo10ntf2e964aukvam.vm.cld.sr/servers";
        let data = "name=" + name + "&ip=" + ip + "&checks=" + this.selectedChecks.join("");
        // console.log("shit" + data);

        this.http.post(url, data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
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
        setTimeout(() => {
            window.location.reload();
        }, 2000);


    }



}

