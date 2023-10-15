import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
  
})
export class PortfolioComponent implements OnInit {

  constructor() { }
  cursor:any;
  ngOnInit(): void {
    AOS.init();
    this.auto_cursor
  }

  night(){
      document.documentElement.classList.toggle('dark-theme')
  }
  auto_cursor(e:any){
    this.cursor.setAttribute("style", "top:"+(e.pageY - 10)+"px; left:"+(e.pageX - 10)+"px;") 
  }
  
}
