import {Component, Input, OnInit} from '@angular/core';
import {RestService} from '../../service/rest.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
  @Input() action;
  @Input() gameId;
  actionData: string;

  constructor(private rest: RestService) {

  }

  ngOnInit() {
  }

  submitAction() {
    this.rest.performAction(this.gameId, this.actionData).subscribe((resp) => {
      console.log(resp);
    });
  }
}
