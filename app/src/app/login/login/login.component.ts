import { Component, OnInit, OnDestroy } from '@angular/core';
import { MdDialog } from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { AuthService } from '../../services/auth.service';
import { showNotification } from '../../utils/base.util';
import { Router } from '@angular/router';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  form: FormGroup;

  sub: Subscription;
  constructor(
    private fb: FormBuilder,
    private dialog: MdDialog,
    private AuthService$: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ["",Validators.compose([Validators.required])],
      password: ["",Validators.required]
    })
  }

  public ngOnDestroy(): void {
    if(this.sub) {
      this.sub.unsubscribe();
    }
  }

  loginBtn(ev:Event){
    ev.preventDefault();
    const value = this.form.value;
    
    this.AuthService$
      .login(value.username,value.password)
      .subscribe(res => this.router.navigate(['/', 'dashboard']));
  }
}
