import { Component } from '@angular/core';
import { FormGroup,FormControl,FormControlName, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  

  user = new FormGroup(
    {
      username : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required])

    }
  )
  errormsg:string= "some error occured!!"
  error:boolean= false;

  get username(){
    console.log(this.user.get('username'))
    return this.user.get('username');
  }

  get pass(){
    return this.user.get('password')
  }


  submit(){
    
    console.log(this.user.value)
    if(this.user.value.username == '' || this.user.value.password == '' ){
      alert("fields cannot be empty!!")
      this.error=true;
    }else{
      alert("form submitted successfully!!")
      this.error = false;
    }
  }

}
