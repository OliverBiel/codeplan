import { Actor } from './actor.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ActorService {

  baseUrl = "http://127.0.0.1:8000/actor/";
  headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    "Content-Type": "application/json",
    "Accept": "application/json",
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers':
      'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
  });
  reqOpt = {
    headers: this.headers
  };


  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg:string): void{
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(actor: Actor): Observable<Actor>{
    return this.http.post<Actor>(this.baseUrl, actor, this.reqOpt);
  }
}
