import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xc-portfolio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public menueitems =[
    {
      name: 'About',
      icon: 'assignment_ind'
    },
    {
      name: 'News',
      icon: 'dashboard'
    },
    {
      name: 'Merch',
      icon: 'shopping_basket'
    },
    {
      name: 'Contact',
      icon: 'speaker_notes'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }
  
  isOpen = false;


}
