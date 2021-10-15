import { Component, HostListener, OnInit } from '@angular/core';

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
  

  constructor(
  ) { 
  }

  ngOnInit(): void {
  }

  
  onScroll(e:any){
    let cloudleft: any = document.getElementById('cloudleft')
    let cloudright: any = document.getElementById('cloudright')
    let pagename : any = document.getElementById('pagename')
    let background : any = document.getElementById('background')
    let value = window.scrollY
    cloudleft.style.left = -value + 'px'
    cloudright.style.left = value + 'px'
    // spagename.style.fontSize = window.screenY + 'px'
    
    switch (true) {
      case value >= 320 && value < 800:
        pagename.style.fontSize = 3000 / value + 'rem'
        pagename.style.marginTop = '5rem' 
        pagename.style.position = 'relative'
        pagename.style.top = '-22rem'
      break;
      case value >= 800:
        pagename.style.fontSize = '3rem'
        background.style.display = 'block'
      break;
      default:
        pagename.style.fontSize = '10rem'
        pagename.style.top = '0rem'
        background.style.display = 'none'
        break;
    }

    
  }
  @HostListener('window:unload')
  toTop(){
    window.scrollTo(0,0)
  }
  


}
