import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { players } from '../resources/players'

@Injectable({
  providedIn: 'root'
})

export class LeagueApiService {

  api_key = 'RGAPI-aa50e679-118d-4234-ae4b-a3934c4ed412'

  constructor( private http: HttpClient) { }

  getCountries(){
    return this.http.get('https://restcountries.eu/rest/v2/all'); 
  }

  getService(player) {

    const urls: string = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/xMercy?api_key=${this.api_key}`

    return this.http.get(urls);

  }

} 