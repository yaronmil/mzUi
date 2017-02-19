import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Fault} from "../models/fault";
import {Http, Response} from "@angular/http";

@Injectable()
export class FaultsDataProviderService {


  private http:Http;
  constructor(h:Http) {
    this.http = h;
  }
  public  getFaults():Observable<Fault[]>
  {
    return  this.http.get( "/api/faults").map(FaultsDataProviderService.extractFaults);
  }
  private static extractFaults(res: Response) {
    let body = res.json();
    return body || { };
  }

}
