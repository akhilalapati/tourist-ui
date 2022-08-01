import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tourist} from "../model/tourist";

@Injectable({
  providedIn: 'root'
})
export class TouristService {

  constructor(public httpclient: HttpClient) {
  }

  baseUrl = "http://localhost:8080/api";

  getAllTourists(): Observable<Tourist[]> {
    return this.httpclient.get<Tourist[]>(this.baseUrl + '/all-tourists');
  }

  saveTourist(tourist: Tourist) : Observable<Tourist>{
    return this.httpclient.post<Tourist>(this.baseUrl + '/add-tourist', tourist);
  }

  deleteTourist(id:number) : Observable<Tourist>{
    return this.httpclient.delete<Tourist>(this.baseUrl + `/${id}`)
  }
}
