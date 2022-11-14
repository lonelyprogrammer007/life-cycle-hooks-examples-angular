import {
  AfterContentChecked,
  AfterViewChecked,
  Component,
  DoCheck,
} from "@angular/core";

@Component({
  selector: "peek-a-boo-parent",
  template: `
    <hr />
    <div class="parent" style="border: 5px solid red;">
      <h2>Peek-A-Boo</h2>

      <button type="button" (click)="toggleChild()">
        {{ hasChild ? "Destroy" : "Create" }} PeekABooComponent
      </button>
      <button type="button" (click)="updateHero()" [hidden]="!hasChild">
        Update Hero
      </button>

      <div class="info">
        <peek-a-boo *ngIf="hasChild" [name]="heroName"></peek-a-boo>

        <h3>Open the //console and see the changes!!</h3>
      </div>
    </div>
  `,
})
export class PeekABooParentComponent
  implements DoCheck, AfterViewChecked, AfterContentChecked
{
  hasChild: boolean;
  heroName: string;

  constructor() {
    this.heroName = "";
    this.hasChild = false;
  }

  toggleChild() {
    this.hasChild = !this.hasChild;
    if (this.hasChild) {
      this.heroName = "Windstorm";
    }
  }

  updateHero() {
    this.heroName += "!";
  }

  ngDoCheck() {
    //console.error("ngDoCheck() - PADRE");
  }

  ngAfterContentChecked() {
    //console.error("ngAfterContentChecked() - PADRE");
  }

  ngAfterViewChecked() {
    //console.error("ngAfterViewChecked() - PADRE");
  }
}
