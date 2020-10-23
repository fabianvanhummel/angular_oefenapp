import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { players } from '../../resources/players'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  players = players;
  constructor() { }

  started: boolean = false;
  height = '5em';

  ngOnInit(): void {
  }

  changeStyle() {
    if(this.started) {
      this.height = '5em';
    } else {
      this.height = '30em';
    }

    return {
      'style.height': this.height
    };
  }

}
