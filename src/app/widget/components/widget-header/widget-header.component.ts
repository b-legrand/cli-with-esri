import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { WidgetState } from '../../model/widget-state';

export interface WidgetheaderParams {

}
/**
 * Ce composant représente la barre de titre d'un widget.
 */
@Component({
  selector: 'widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.scss']
})
export class WidgetHeaderComponent implements OnInit {

  @Input() public state: WidgetState;

  @Output() public stateChange: EventEmitter<WidgetState> = new EventEmitter<WidgetState>();
  /**
   * Affiche ou non le bouton fermer.
   */
  @Input() public closable: boolean;

  /**
   * Affiche ou non le bouton plier/déplier.
   */
  @Input() public foldable: boolean;

  /**
   * Affiche ou non le bouton ancrer.
   */
  @Input() public anchorable: boolean;

  /**
   * Affiche ou non le bouton déplacer.
   */
  @Input() public movable: boolean;

  constructor() { }

  ngOnInit() {
  }

  handleAnchor(event){
    this.state.anchored = !this.state.anchored;
    this.stateChange.emit(this.state);
  }
  handleClose(event){
    this.state.closed = !this.state.closed;
    this.stateChange.emit(this.state);
  }

  handleFold(event){
    this.state.folded = !this.state.folded;
    this.stateChange.emit(this.state);
  }

}
