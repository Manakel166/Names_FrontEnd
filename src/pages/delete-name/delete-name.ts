import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Rest } from '../../providers/rest/rest';
import { FileChooser } from '@ionic-native/file-chooser';

import {FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the DeleteNamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-delete-name',
  templateUrl: 'delete-name.html',
})
export class DeleteNamePage {

  private names : FormGroup;
  private response: string;
  private listNames :string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest:Rest, private formBuilder: FormBuilder,private fileChooser: FileChooser) {
    this.names = this.formBuilder.group({
      name: [''],
      fileInput: [''],
    });
    this.getNames();
  }

  delete(){
    console.log(this.names.value);

    this.rest.deleteName(this.names.value).subscribe(res=>{
      this.response = this.names.value.name + " has been deleted";
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
    console.log('ionViewDidLoad DeleteNamePage');
  }

}
