import { Component } from '@angular/core';
import { InfoPagesService } from "../app/services/info-pages.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portafolio';

  constructor(public InfoPagesService: InfoPagesService) {
  }
}
