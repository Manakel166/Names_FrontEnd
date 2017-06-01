import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Rest {

  private serverURL: string;

  constructor(public http: Http)
  {

    this.http=http;
    //this.serverURL = 'http://kithfried.pythonanywhere.com/names';
    this.serverURL = 'https://api-rest-b2u.herokuapp.com/names';
  }
  getNames()
  {
    return this.http.get(this.serverURL).map(res=>res.json());
  }

  addName(jsonName)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    console.log(jsonName);
    let body = jsonName;
    let res = false;
    return this.http.post(this.serverURL, body, {headers: headers})
      .map(res=>res.json());

  }

  deleteName(jsonName)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(jsonName);
    let url = this.serverURL + '/' + jsonName.name;

    return this.http.delete(url, {headers: headers})
      .map(res=>res.json());
  }

  modifyName(jsonName)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = this.serverURL + '/' + jsonName.oldName;
    let body = '{"newname":"' + jsonName.newName + '"}';
    console.log(body);
    return this.http.put(url, body, {headers: headers})
      .map(res=>res.json());
  }


}
