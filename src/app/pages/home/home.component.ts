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

  ngOnInit(): void {
  }

}
