import { Component } from '@angular/core';
import { players } from '../../resources/players'
import { LeagueApiService } from './../../services/league_api.service';
import { LegendComponent } from './../legend/legend.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  color = ''
  started = false;
  height_dynamic = '5rem'
  dynamic_visibility_button = 'visible'
  dynamic_visibility_champions = 'hidden'
  dynamic_visibility_legend = 'visible'
  dynamic_animation_player_1 = 'animation: 3s ease-in-out 0ms 1 fadein;'
  dynamic_animation_player_2 = 'animation: 3.5s ease-in-out 0ms 1 fadein;'
  dynamic_animation_player_3 = 'animation: 4s ease-in-out 0ms 1 fadein;'
  dynamic_animation_player_4 = 'animation: 4.5s ease-in-out 0ms 1 fadein;'
  dynamic_animation_player_5 = 'animation: 5s ease-in-out 0ms 1 fadein;'
  players = players;
  
  colorWinrate(win_rate) {
    if (parseInt(win_rate) < 34) {
      this.color = 'green';
    } else if (parseInt(win_rate) < 45) {
      this.color = 'gold';
    } else if (parseInt(win_rate) < 55) {
      this.color = 'orange';
    } else if (parseInt(win_rate) < 75) {
      this.color = 'red';
    } else {
      this.color = 'black';
    }
    return(this.color)
  }

  colorGames(games_played) {
    if (parseInt(games_played) < 20) {
      this.color = 'green';
    } else if (parseInt(games_played) < 50) {
      this.color = 'gold';
    } else if (parseInt(games_played) < 250) {
      this.color = 'orange';
    } else if (parseInt(games_played) < 500) {
      this.color = 'red';
    } else {
      this.color = 'black';
    }
    return(this.color)
  }

  colorMastery(mastery) {
    if (parseInt(mastery) < 5000) {
      this.color = 'green';
    } else if (parseInt(mastery) < 25000) {
      this.color = 'gold';
    } else if (parseInt(mastery) < 100000) {
      this.color = 'orange';
    } else if (parseInt(mastery) < 250000) {
      this.color = 'red';
    } else {
      this.color = 'black';
    }
    return(this.color)
  }

  colorKDA(kda) {
    if (parseInt(kda) < 2) {
      this.color = 'green';
    } else if (parseInt(kda) < 4) {
      this.color = 'gold';
    } else if (parseInt(kda) < 6) {
      this.color = 'orange';
    } else if (parseInt(kda) < 10) {
      this.color = 'red';
    } else {
      this.color = 'black';
    }
    return(this.color)
  }

  changeStyle() {
    this.started = true;
    this.height_dynamic = '70%'
    this.dynamic_visibility_button = 'hidden'
    this.dynamic_visibility_champions = 'visible'
  }

  playerData = null;
  constructor(private league_api: LeagueApiService) { }


  getPlayerData() {
    this.league_api.getService(this.players).subscribe((test) => {
      this.playerData = test;
    });
  }

  goButton() {
    this.changeStyle()
    this.getPlayerData()
  }

}
