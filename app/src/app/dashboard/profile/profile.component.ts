import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { showNotification } from '../../utils/base.util';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  editPasswordForm: FormGroup;
  constructor(private fb: FormBuilder) { 

  }
  
  ngOnInit() {
        
    let newPassword = new FormControl('', Validators.required);
    let repeat = new FormControl('', CustomValidators.equalTo(newPassword));
    
    this.editPasswordForm = this.fb.group({
      oldPassword: ["",Validators.compose([Validators.required])],
      newPassword: newPassword,
      repeat: repeat
    })
  }

  onSubmit({value,valid},ev:Event){
    ev.preventDefault();
    if(!valid){
      return;
    }
    console.log(value);
    showNotification('top','right','danger',`ewrwerwer`);
  }

}
