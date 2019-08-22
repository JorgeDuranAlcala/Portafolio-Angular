import { Component, OnInit } from '@angular/core';
import { InfoPagesService } from 'src/app/services/info-pages.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  information
  constructor(public infoService: InfoPagesService) {
      
   }

  ngOnInit() {
    
  }

}
