import { Component } from "@angular/core";

@Component({
  selector: "spy-parent",
  templateUrl: "./spy.component.html",
})

export class SpyParentComponent {
  newName;
  heroes: string[];

  constructor() {
    this.heroes = ["Windstorm", "Magneta"];
    this.newName = "Herbie";
  }

  addHero() {
    if (this.newName.trim()) {
      this.heroes.push(this.newName.trim());
      this.newName = "";
    }
  }
  removeHero(hero: string) {
    this.heroes.splice(this.heroes.indexOf(hero), 1);
  }
  reset() {
    this.heroes = [];
  }
}

