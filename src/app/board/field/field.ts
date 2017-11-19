import {Piece} from './piece/piece';

export interface Field{
  id: number;
  position: { data: { x: number, y: number } };
  piece: Piece;
}
