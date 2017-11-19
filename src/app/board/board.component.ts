import {Component, Input, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {Piece} from './field/piece/piece';
import {Field} from './field/field';
import {RestService} from '../service/rest.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() fields: [{ id: number, position: { data: { x: number, y: number } }, piece: Piece }];
  action;
  @Input() gameId: number;

  constructor(private rest: RestService) {
  }

  ngOnInit() {
    console.log(_.chain([1, 2, 3]));
  }

  onDraggedToField(event: { field: Field, piece: Piece }) {
    for (const iField of this.fields) {
      iField.piece = null;
    }
    event.field.piece = event.piece;
  }

  onActionFound() {
    this.rest.getAction(this.gameId).subscribe((resp) => {
      this.action = resp;
    });
  }
}
