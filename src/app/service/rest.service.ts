import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Coordinates} from '../board/coordinates';

@Injectable()
export class RestService {

  constructor(private http: HttpClient) {
  }

  startGame(playerName: string) {
    return this.http.get(`http://localhost:8080/game/start?playerName=player`);
  }

  getBoard(gameId: number) {
    return this.http.get(`http://localhost:8080/game/` + gameId + `/board`);
  }

  commitRound(gameId: number, coordinates: Coordinates) {
    return this.http.post(`http://localhost:8080/game/` + gameId + `/commit`, coordinates);
  }

  getAction(gameId: number) {
    return this.http.get(`http://localhost:8080/game/` + gameId + `/action`);
  }

  performAction(gameId: number, data: string) {
    return this.http.get(`http://localhost:8080/game/` + gameId + `/action/perform?data=` + data);
  }
}
