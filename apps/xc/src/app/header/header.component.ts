import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    private router: Router
  ) { 
  }

  ngOnInit(): void {

    
  }

  
  onScroll(){
    let cloudleft: any = document.getElementById('cloudleft')
    let cloudright: any = document.getElementById('cloudright')
    let pagename : any = document.getElementById('pagename')
    let background : any = document.getElementById('background')
    let value = window.scrollY
    console.log(value)
    cloudleft.style.left = -value/2 + 'px'
    cloudright.style.left = value/2 + 'px'
    // spagename.style.fontSize = window.screenY + 'px'
    
    switch (true) {
      case value >= 340 && value < 800:
        pagename.style.fontSize = 3000 / value + 'rem'
        pagename.style.marginTop = '5rem' 
        pagename.style.position = 'relative'
        pagename.style.top = '-22rem'
        cloudleft.style.display = 'block'
        cloudright.style.display = 'block'
      break;
      case value >= 800:
        pagename.style.fontSize = '3rem'
        background.style.display = 'block'
        cloudleft.style.display = 'none'
        cloudright.style.display = 'none'
      break;
      default:
        cloudleft.style.display = 'block'
        cloudright.style.display = 'block'
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
  
  pagenamenv(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  scrollToElement(element:any){
    let pagename : any = document.getElementById('pagename')

    pagename.style.marginTop = '5rem' 
    pagename.style.position = 'relative'
    pagename.style.top = '-22rem'
    
    switch(element){
      case 'About':
        window.scrollTo({
          top: 833,
          behavior: 'smooth'
        })
        console.log(element)
        break;
      case 'News':
        window.scrollTo({
          top: 1766,
          behavior: 'smooth'
        })
        console.log(element)
        break;
    
      case 'Merch':
        window.scrollTo({
          top: 2699,
          behavior: 'smooth'
        })
        console.log(element)
        break;
    
      case 'Contact':
        window.scrollTo({
          top: 3642,
          behavior: 'smooth'
        })
        console.log(element)
        break;
    }

  }


}
