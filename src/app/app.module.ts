import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {   HttpClientModule } from '@angular/common/http';
import { Ng2DragDropModule } from 'ng2-drag-drop';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BoardComponent } from './board/board.component';
import {RestService} from './service/rest.service';
import { FieldComponent } from './board/field/field.component';
import { PieceComponent } from './board/field/piece/piece.component';
import { ActionComponent } from './board/action/action.component';
import {OrderModule} from 'ngx-order-pipe';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    FieldComponent,
    PieceComponent,
    ActionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    OrderModule,
    Ng2DragDropModule.forRoot()
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
