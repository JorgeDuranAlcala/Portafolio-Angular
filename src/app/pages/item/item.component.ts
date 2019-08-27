import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDesc } from 'src/app/interfaces/productDes.interface';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  producto: ProductoDesc;
  id: string;

  constructor(private route : ActivatedRoute, public productoService: ProductosService) { }

  ngOnInit() {
      this.route.params
      .subscribe(param => {
          this.id = param['id']
          this.productoService.getProducto(param['id'])
          .subscribe( (product: ProductoDesc) => {
              this.producto = product
              console.log(product)
          }
          )
      })
  }

}
