import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Piece} from './piece';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})
export class PieceComponent implements OnInit {
  @Input() piece: Piece;

  constructor(private myElement: ElementRef) {
  }

  ngOnInit() {
    console.log(this.piece);
  }

}
