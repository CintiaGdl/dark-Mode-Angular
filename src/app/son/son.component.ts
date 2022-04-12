import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {
  @Input() class!: string;
  @Output() emitMode = new EventEmitter<string>()


  constructor() { }

  sendMode() {
    if(this.class === 'black') {
      this.emitMode.emit('white')
    } else {
      this.emitMode.emit('black')
    }
  }

  ngOnInit(): void {
  }

}
