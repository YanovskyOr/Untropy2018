import { Time } from "@angular/common";

export interface Server {
    _id : string;
    name : string;
    ip : string;
    checks : string;
    time : Time;
    result : string;
    status : string;
}