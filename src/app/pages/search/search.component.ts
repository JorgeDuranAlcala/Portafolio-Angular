import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  cargando = true
  constructor(public service: ProductosService, private route: ActivatedRoute) {
      
   }

  ngOnInit() {
    this.route.params
      .subscribe( params => {

        console.log(params['termino']);
        this.service.buscarProducto( params['termino'] );

      });
  }

}
