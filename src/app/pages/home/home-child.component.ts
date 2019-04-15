import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-home-child",
  // templateUrl: "./home.component.html",
  // styleUrls: ["./home.component.scss"]
  template: `
    <h3>{{ value }}</h3>
    <h4>{{ data | json }}</h4>
    <button (click)="onChangeClick()">Change</button>
  `
})
export class HomeChildComponent {
  @Input() data: Object = {};
  @Output() change = new EventEmitter();
  value: number = 9;

  onChangeClick() {
    this.change.emit(this.value);
  }
}
