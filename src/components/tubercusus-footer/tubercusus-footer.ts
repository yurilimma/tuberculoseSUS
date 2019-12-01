import { Component } from '@angular/core';

/**
 * Generated class for the TubercususFooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tubercusus-footer',
  templateUrl: 'tubercusus-footer.html'
})
export class TubercususFooterComponent {

  text: string;

  constructor() {
    console.log('Hello TubercususFooterComponent Component');
    this.text = 'Hello World';
  }

}
