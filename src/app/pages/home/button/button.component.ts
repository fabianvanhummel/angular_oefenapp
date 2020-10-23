import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  started: boolean = false  
  ngOnInit(): void {
  }

  changeStyle() {
    this.started = true
    return(this.started)
  }
}
