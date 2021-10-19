import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xc-portfolio-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  checkItemVal:number = 1
  constructor() { }

  ngOnInit(): void {
  }

  checkItem(i:number){
    this.checkItemVal = i
  }

}
