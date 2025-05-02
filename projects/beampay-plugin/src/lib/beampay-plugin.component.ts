import {Component, Input, OnInit} from '@angular/core';
export * from './beam-email-confirmation-form/beam-email-confirmation-form.component';
export * from './gateway-form/gateway.component';


@Component({
  selector: 'lib-beampay-plugin',
  template: `
    <app-beam-email-confirmation-form [showGateway]="showGateway" [amount]="amount" [lineItems]="lineItems"
                                      [terminalKey]="_terminalKey"></app-beam-email-confirmation-form>
  `,
  styles: [
  ]
})
export class BeampayPluginComponent implements OnInit {

  @Input() showGateway: boolean;
  @Input() amount: any;
  @Input() lineItems: any;
   _terminalKey!: string;
  constructor() {
    this.showGateway = false;
  }

  ngOnInit(): void {
    console.log(this.terminalKey)
  }

  @Input()
  set terminalKey(value: string) {
    this._terminalKey = value;
    if (value) {
      sessionStorage.setItem('terminalKey', value);
      console.log('terminalKey saved to sessionStorage:', value);
    }
  }

}
