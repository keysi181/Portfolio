import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ColorSchemeService } from './color_scheme/color_scheme.service';

@Component({
  selector: 'xc-portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private http: HttpClient, private _colorScheme: ColorSchemeService) {
    this._colorScheme.load();
  }
}
