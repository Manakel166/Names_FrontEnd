import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Rest } from '../../providers/rest/rest';
import {FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the AddNamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-name',
  templateUrl: 'add-name.html',
})
export class AddNamePage {

  private names : FormGroup;
  private response: string;

  constructor(public navCtrl: NavController, public navParams: NavParams , public rest:Rest, private formBuilder: FormBuilder, public toastCtrl: ToastController) {
    this.names = this.formBuilder.group({
      name: [''],
    });
  }

  add(){
    this.rest.addName(this.names.value).subscribe(res=>{
      this.response = this.names.value.name + " has been added";
    },
      err=>{
        this.response = "An error has occurred trying to process your request.";
      }
    );


    /*if()
    {
      let toast = this.toastCtrl.create({
        message: `Name added`,
        duration: 2000
      });
      toast.present();
    }*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNamePage');
  }

}
