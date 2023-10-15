import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.scss']
})
export class FlowerComponent implements OnInit {
  hide = false
  constructor() { }

  ngOnInit(): void {
  }
  open(){
    this.hide = true
  }
}
