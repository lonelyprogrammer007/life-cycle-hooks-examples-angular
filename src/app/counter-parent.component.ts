import { Component } from "@angular/core";

@Component({
  selector: "counter-parent",
  template: `
    <div style="border: 5px solid tomato;">
      <h2>Counter Spy</h2>

      <button type="button" (click)="updateCounter()">Update counter</button>
      <button type="button" (click)="reset()">Reset Counter</button>

      <app-counter [counter]="value"></app-counter>
    </div>
  `,
})
export class CounterParentComponent {
  value = 0;

  constructor() {
    this.reset();
  }

  updateCounter() {
    this.value += 1;
  }

  reset() {
    this.value = 0;
  }
}
