import { Directive, OnInit, OnDestroy, Input } from "@angular/core";

@Directive({ selector: "[appSpy]" })
export class SpyDirective implements OnInit, OnDestroy {
  @Input() generalParam!: string;

  constructor() {}

  ngOnInit() {
    //console.warn(`ngOnInit() - Spy directive - ${this.generalParam}`);
  }

  ngOnDestroy() {
    //console.warn(`ngOnDestroy() - Spy directive - ${this.generalParam}`);
  }
}
