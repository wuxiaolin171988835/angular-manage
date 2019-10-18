/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-18 14:03:18
 * @LastEditTime: 2019-10-18 17:42:06
 * @LastEditors: Please set LastEditors
 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  Login(): void {
    this.route.navigate(['/article']);
    // this.us.login(this.validateForm.value).subscribe((result: any) => {});
  }

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private us: UserService
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
    console.log(this.validateForm);
  }
}
