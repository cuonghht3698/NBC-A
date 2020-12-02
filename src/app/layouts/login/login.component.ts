import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb:FormBuilder) { }
  signInForm!:FormGroup;


  ngOnInit(): void {
    this.signInForm = this.fb.group({
      Username : '',
      Password : ''
    })
  }

}
