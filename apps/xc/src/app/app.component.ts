import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@xc-portfolio/api-interfaces';
import { ColorSchemeService } from './color_scheme/color_scheme.service';

@Component({
  selector: 'xc-portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  darkmode = false;
  constructor(private http: HttpClient, private _colorScheme: ColorSchemeService) {
    this._colorScheme.load();
  }
}
