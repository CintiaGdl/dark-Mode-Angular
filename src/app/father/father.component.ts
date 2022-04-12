import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {
  class: string = 'dark'
  constructor() { }

  

  setMode(mode: string): void {
    this.class = mode
    console.log(mode)
  }

  ngOnInit(): void {
  }

}
