import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { InfoPage } from "../interfaces/info-pages.interface";

@Injectable({
  providedIn: 'root'
})
export class InfoPagesService {

  info:InfoPage;
  cargada = false;

  constructor(private http: HttpClient) {

    this.http.get('assets/data/data-page.json').subscribe( (res:InfoPage) => {

        this.cargada = true;
        this.info = res
        console.log(res);
        
    }) 

   }
}
