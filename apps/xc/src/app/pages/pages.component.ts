import { Component, OnInit } from '@angular/core';
import { ColorSchemeService } from '../color_scheme/color_scheme.service';

@Component({
  selector: 'xc-portfolio-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  themecolor = localStorage.getItem('prefers-color')
  
  constructor(private colorScheme: ColorSchemeService) { }

  ngOnInit(): void {
  }

}
