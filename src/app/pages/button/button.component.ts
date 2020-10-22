import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  ngOnInit(): void {
  }

  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }

}
