import { Directive, OnInit } from "@angular/core";


@Directive({ selector: "[appPeekABoo]" })
export class PeekABooDirective implements OnInit {
  constructor() {}

  ngOnInit() {
    console.warn("ngOnInit() - HIJO - directiva");
  }

}

