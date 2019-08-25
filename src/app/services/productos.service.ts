import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  productos: any[] = [];
  url: string = `https://angular-html-fadbc.firebaseio.com/productos_idx.json`;
  cargado = false;

  constructor(private htpp: HttpClient) { 
    this.cargarProducto()
  }
  
  private cargarProducto() {
      this.htpp.get(this.url)
      .subscribe( (res: any[]) => {
        this.cargado = true
        this.productos = res;
        console.log(res)
      } )
  }
}
