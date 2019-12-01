import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the DashboardButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'dashboard-button',
  templateUrl: 'dashboard-button.html'
})
export class DashboardButtonComponent {
  
  @Input() buttonLabel: string;
  @Input() buttonIcon: string;
  @Input() color: string;
  @Output() buttonClicked = new EventEmitter();

  constructor() {

  }

  onClickCallAction() {
    this.buttonClicked.emit()
  }
}
