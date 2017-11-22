import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Field} from './field';
import {RestService} from '../../service/rest.service';
import {Piece} from './piece/piece';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
  @Input() field: Field;
  @Input() gameId: number;
  @Output() draggedTo = new EventEmitter<{ field: Field, piece: Piece }>();
  @Output() actionStateChanged = new EventEmitter<boolean>();
  dragScope: [string];

  dropScope: string;

  constructor(private rest: RestService) {
  }

  ngOnInit() {
    this.initScopes();
  }

  initScopes() {
    const x: number = this.field.position.data.x;
    const y: number = this.field.position.data.y;

    this.dropScope = x + '_' + y;
    this.dragScope = [
      x + 1 + '_' + y,
      x + '_' + (y + 1),
      x - 1 + '_' + y,
      x - 1 + '_' + (y + 1),
      x + 1 + '_' + (y - 1),
      x + '_' + (y - 1),
      x + 1 + '_' + (y + 1),
      x - 1 + '_' + (y - 1)
    ];
  }

  onItemDrop(e: any) {
    this.rest.commitRound(this.gameId, this.field.position.data).subscribe((resp) => {

        const aResp: any = resp;
        if (aResp.roundStatus.info === 'ACTION_POSSIBLE') {
          this.emitMovement(e);
          this.actionStateChanged.emit(true);
        } else if (aResp.roundStatus.roundState === 'NEW') {
          this.emitMovement(e);
          this.actionStateChanged.emit(false);
        }
      }
    );
  }


  emitMovement(e: any) {
    this.draggedTo.emit({field: this.field, piece: e.dragData});
  }
}
