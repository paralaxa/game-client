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
  @Output() actionFound = new EventEmitter<any>();

  constructor(private rest: RestService) {
  }

  ngOnInit() {
  }

  onItemDrop(e: any) {
    this.rest.commitRound(this.gameId, this.field.position.data).subscribe((resp) => {
        const aResp: any = resp;
        if (aResp.roundStatus.info === 'ACTION_POSSIBLE') {
          this.emitMovement(e);
          this.actionFound.emit();
        } else if (aResp.roundStatus.roundState === 'NEW') {
          this.emitMovement(e);
        }
      }
    );
  }

  private emitMovement(e: any) {
    this.draggedTo.emit({field: this.field, piece: e.dragData});
  }
}
