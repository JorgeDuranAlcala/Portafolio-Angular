import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { InfoPage } from "../interfaces/info-pages.interface";
import { Equipo } from "../interfaces/equipo-pages.interface";

@Injectable({
  providedIn: 'root'
})
export class InfoPagesService {

  info:InfoPage;
  equipo: Equipo[] = [];
  cargada = false;


  constructor(private http: HttpClient) {
    //cargada de Info
      this.cargarInfo()
      this.cargarEquipo()
   }
   
   private cargarInfo() {
     
     this.http.get('assets/data/data-page.json').subscribe( (res:InfoPage) => {
         this.cargada = true;
         this.info = res
         console.log(res);
     }) 
   }

   private cargarEquipo() {
     this.http.get('https://angular-html-fadbc.firebaseio.com/equipo.json').subscribe( (res: Equipo[]) => {
       this.cargada = true;
       this.equipo = res;

       console.log(res)
     })
   }
}
