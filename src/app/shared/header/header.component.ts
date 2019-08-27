import { Component, OnInit } from '@angular/core';
import { InfoPagesService } from 'src/app/services/info-pages.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  information

  constructor(public infoService: InfoPagesService,
              private router: Router) {
      
   }

  ngOnInit() {
    
  }

  buscarProducto(termino: string) {
        if(termino.length < 1) { return }
        this.router.navigate(['/search', termino])
  }

}
