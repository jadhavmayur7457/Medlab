import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  baseUrl:string="http://localhost:3000/"
  headers:HttpHeaders=new HttpHeaders({
    'content-type':'applicatio/json'
  })
  GetDatafromserver(endpoint:string,params:HttpParams=new HttpParams()){
  const url=this.baseUrl+endpoint

   return this.http.get(url,{headers:this.headers,params:params})
  }
  postDatafromserver(endpoint:string,data:any){
    const url=this.baseUrl+endpoint
  
     return this.http.post(url,{headers:this.headers})
    }
}
