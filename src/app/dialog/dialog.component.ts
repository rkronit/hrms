import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profile } from '../models/profile';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  prodForm:FormGroup

  valSubmit=false;

  profile: Profile | undefined;

  


constructor(private formBuilder:FormBuilder) {
    this.prodForm=this.formBuilder.group({
      prodName:["",Validators.required],
      price:["",Validators.required],

    });
   }

  ngOnInit() {
  }
addProduct(){
  this.valSubmit=true;
  console.log('add works');
}
}
