import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { UsernameValidators } from './username.validator';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  form = new FormGroup({
    username:new FormControl('',[Validators.required, 
      Validators.minLength(3), 
      UsernameValidators.cannotContainSpace, 
      // UsernameValidators.shouldBeUnique
    ]),
    password:new FormControl('', Validators.required),
  });

  get username(){
    return this.form.get('username')
  }

  login(){
 
      this.form.setErrors({
        invalidLogin: true
      });
  }
  constructor() { }

  ngOnInit(): void {
  }

}
