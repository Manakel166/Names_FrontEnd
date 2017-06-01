import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Rest } from '../../providers/rest/rest';
import {FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the ModifyNamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modify-name',
  templateUrl: 'modify-name.html',
})
export class ModifyNamePage {

  private form : FormGroup;
  private response: string;
  private listNames :string[];

  constructor(public navCtrl: NavController, public navParams: NavParams , public rest:Rest, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      oldName: [''],
      newName: [''],
    });
    this.getNames();
  }

  modify(){
    //console.log(getElementById('name'));
    console.log(this.form.value.oldName);
    this.rest.modifyName(this.form.value).subscribe(res=>{
      this.response = this.form.value.oldName + " is now " + this.form.value.newName;
    },
      err=>{
        this.response = "An error has occurred trying to process your request.";
      }
    );
  }

  getNames(){
    this.rest.getNames().subscribe(res=>{
      //alert(res["name"]);
      console.log(res.names);
      if(res.names.length == 0){
        console.log(res);
        res.names.push("No names in database ");
      }
      this.listNames = res.names;

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifyNamePage');
  }

}
