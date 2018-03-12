import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [{ id: 'hello', label: 'hello' }];
  selectModel = [];

  onClickSetModel() {
    this.selectModel = [{ label: 'hi' }];
  }

  get stringifiedSelectModel() {
    return JSON.stringify(this.selectModel, undefined, 2);
  }
}
