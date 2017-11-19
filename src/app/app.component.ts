import {Component} from '@angular/core';
import {RestService} from './service/rest.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameId: number;
  board: any;
  playername: string;

  constructor(private rest: RestService) {
  }

  startGame() {
    this.rest.startGame(this.playername).subscribe((resp) => {
      this.gameId = <number>resp;
    });
  }

  getBoard() {
    this.rest.getBoard(this.gameId).subscribe((resp) => {
      const tmp = <any> resp;
      const x = _.orderBy(tmp.fields, ['position.data.x', 'position.data.y'], ['asc', 'asc']);
      this.board = {fields: x};
    });
  }
}
