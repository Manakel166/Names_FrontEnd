import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Rest } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items :string[];

  constructor(public navCtrl: NavController, public rest:Rest) {
    console.log("V0.0.1");
    this.getNames();
  }

  doRefresh(refresher){
    console.log("begin refresh" , refresher);

    this.getNames();

    refresher.complete();
  }

  getNames(){
    this.rest.getNames().subscribe(res=>{
      //alert(res["name"]);
      console.log(res.names);
      if(res.names.length == 0){
        console.log(res);
        res.names.push("No names in database ");
      }
      this.items = res.names;

    });
  }

}
