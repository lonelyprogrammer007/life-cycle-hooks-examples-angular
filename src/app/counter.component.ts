import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-counter",
  template: `
    <div style="border: 5px solid rebeccapurple; margin: 1rem;">
      <p>Counter = {{ counter }}</p>

      <div class="info">
        <h3>Counter Changes</h3>
        <div
          *ngFor="let counterChange of changeLog"
          appSpy
          [generalParam]="counterChange"
          class="log"
        >
          <div style="border: 5px solid blue;">
            {{ counterChange }}
          </div>
        </div>
      </div>
    </div>
  `,
})
export class MyCounterComponent implements OnChanges {
  @Input() counter = 0;
  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    // Empty the changeLog whenever counter goes to zero
    // hint: this is a way to respond programmatically to external value changes.
    if (this.counter === 0) {
      this.changeLog = [];
    }

    // A change to `counter` is the only change we care about
    const counterChange = changes["counter"];
    const current = counterChange.currentValue;
    const firstChange = counterChange.firstChange;
    const prev = JSON.stringify(counterChange.previousValue); // first time is {}; after is integer
    this.changeLog.push(
      `counter: currentValue = ${current}, previousValue = ${prev}, firstChange = ${firstChange}`
    );
  }
}
