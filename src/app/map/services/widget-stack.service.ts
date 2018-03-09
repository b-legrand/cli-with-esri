import {Injectable} from '@angular/core';
import {Portal} from '@angular/cdk/portal';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

/**
 * Service chargé de répartir chaque widget dans les zones qui vont bien selon leur état.
 * Permets de partager les widgets entre `widget-container` et `anchor-zone`
 */
@Injectable()
export class WidgetStackService {

  /**
   * Liste des widgets ancrés au sein d'un widget-container.
   */
  public anchoredWidgets: BehaviorSubject<Portal<any>[]>;

  /**
   * Liste des widgets à l'état flottant.
   */
  public floatingWidgets: BehaviorSubject<Portal<any>[]>;

  constructor() {
    this.floatingWidgets = new BehaviorSubject([]);
    this.anchoredWidgets = new BehaviorSubject([]);
  }

  /**
   * Enregistre un Portal (<ng-template>, widget avec directive *cdkPortal)
   * auprès de ce service.
   * @param {} widget
   */
  managePortal(widget: Portal<any>) {
    console.log('managePortal()', widget);
  }

  /**
   *
   * @param {Portal} widget
   * @param {BehaviorSubject<Portal<any>[]>} first
   * @param {BehaviorSubject<Portal<any>[]>} second
   */
  private switch(widget: Portal<any>, first: BehaviorSubject<Portal<any>[]>, second: BehaviorSubject<Portal<any>[]>) {
    const firstStack: Portal<any>[] = first.getValue();
    // ajoute au premier tableau
   // firstStack.push(firstStack.indexOf(widget), 1);

    let secondStack: Portal<any>[] = second.getValue();
    // enlève du deuxième
    secondStack = secondStack.splice(secondStack.indexOf(widget), 1);
    // renvoie aux abonnés.
    first.next(firstStack);
    second.next(secondStack);
  }

  attach(portal: Portal<any>) {
    this.switch(
      portal,
      this.anchoredWidgets,
      this.floatingWidgets
    );
  }

  detach(portal: Portal<any>) {
    this.switch(
      portal,
      this.floatingWidgets,
      this.anchoredWidgets,
    );
  }

}
