import { Injectable } from '@angular/core';
import {MzSystem} from "../mz-systems/mz-system";
import {sysLink} from "../mz-systems/sys-link";
import {Http,Response } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class SystemDataProviderService {

  private links:sysLink[];
  constructor( private http:Http) {

  }

  public  getSystemsList():Observable<MzSystem[]>
  {
    return  this.http.get("assets/systemsList.json").map(SystemDataProviderService.extractSystemsData)  .catch(SystemDataProviderService.handleError);

  }
  public  getSysLinks():Observable<sysLink[]>
  {
    return  this.http.get("assets/sysLinks.json").map(SystemDataProviderService.extractSysLinks)  .catch(SystemDataProviderService.handleError);

  }

  private static handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  private static extractSystemsData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private static extractSysLinks(res: Response) {
    let body = res.json();
    return body || { };
  }



}
