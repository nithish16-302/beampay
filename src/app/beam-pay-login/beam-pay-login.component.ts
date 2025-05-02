import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-beam-pay-login',
  templateUrl: './beam-pay-login.component.html',
  styleUrls: ['./beam-pay-login.component.css']
})
export class BeamPayLoginComponent implements OnInit {
  // _terminalKey: string;

  constructor() {
  }

  ngOnInit(): void {
    sessionStorage.setItem('terminalKey', 'f4babaa48ce241da8df927ad3e74600e82da590e033a454c968caa80dabd2294');
    this.terminalKey('f4babaa48ce241da8df927ad3e74600e82da590e033a454c968caa80dabd2294')
  }

  set terminalKey(value: any) {
    // this._terminalKey = value;
    sessionStorage.setItem('terminalKey', value);
    console.log('terminalKey saved to sessionStorage');
  }

}
