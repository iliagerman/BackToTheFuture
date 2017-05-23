import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public randomYear:number;

  constructor(public navCtrl: NavController) {

  }

  public travel(){
    this.randomYear = this.GetRandomYear(1000,4000);

    console.log("traveling to year: " , this.randomYear);
  }

  private GetRandomYear(min: number, max: number): number {
    return Math.floor(Math.random() * (max-min))+min;
  }
}
