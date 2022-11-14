import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from "@angular/core";

import { PeekABooDirective } from "./peek-a-boo.directive";

@Component({
  selector: "peek-a-boo",
  template: `<p style="border: 5px solid green;">
    Now you see my hero, {{ name }}
  </p>`,
})
export class PeekABooComponent
  extends PeekABooDirective
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() name: string;
  private verb: string;

  constructor() {
    super();
    this.name = "";
    this.verb = "initialized";

    console.warn("construtor() - HIJO");
  }

  // only called for/if there is an @input variable set by parent.
  ngOnChanges(changes: SimpleChanges) {
    const changesMsgs: string[] = [];
    for (const propName in changes) {
      if (propName === "name") {
        const name = changes["name"].currentValue;
        changesMsgs.push(`name ${this.verb} to "${name}"`);
      } else {
        changesMsgs.push(propName + " " + this.verb);
      }
    }
    this.verb = "changed"; // next time it will be a change
    console.warn("ngOnChanges() - HIJO");
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngDoCheck() {
    console.warn("ngDoCheck() - HIJO");
  }

  ngAfterContentInit() {
    console.warn("ngAfterContentInit() - HIJO");
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterContentChecked() {
    console.warn("ngAfterContentChecked() - HIJO");
  }

  ngAfterViewInit() {
    console.warn("ngAfterViewInit() - HIJO");
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterViewChecked() {
    console.warn("ngAfterViewChecked() - HIJO");
  }

  ngOnDestroy() {
    console.warn("ngOnDestroy() - HIJO");
  }
}


