import { Component, EventEmitter, Input, Output, Inject } from "@angular/core";
import { WidgetState } from "../../model/widget-state";

import { APP_CONFIG, AppConfig } from "../../../core/model/app.config";

/**
 * Ce composant représente la barre de titre d'un widget.
 */
@Component({
  selector: "widget-header",
  templateUrl: "./widget-header.component.html",
  styleUrls: ["./widget-header.component.scss"],
})
export class WidgetHeaderComponent {
  @Input() public state: WidgetState;

  @Output()
  public stateChange: EventEmitter<WidgetState> = new EventEmitter<
    WidgetState
  >();

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

  public themeColor: string;

  constructor(@Inject(APP_CONFIG) appConfig: AppConfig) {
    this.themeColor = appConfig.themeColor;
  }

  handleAnchor(event) {
    this.state.anchored = !this.state.anchored;
    this.stateChange.emit(this.state);
  }

  handleClose(event) {
    this.state.closed = !this.state.closed;
    this.stateChange.emit(this.state);
  }

  handleFold(event) {
    this.state.folded = !this.state.folded;
    this.stateChange.emit(this.state);
  }
}
