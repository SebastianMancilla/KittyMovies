import { Component, Input } from '@angular/core';
import { Cast } from '../../../../models/Cast.model';

@Component({
  selector: 'card-cast',
  templateUrl: './card-cast.component.html',
  styleUrls: ['./card-cast.component.css']
})
export class CardCastComponent {
  @Input()
  actor!: Cast;

  constructor(){}
}
