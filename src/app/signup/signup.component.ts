import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup | any;
  userlist:any[]=[];

  constructor(private formBuilder:FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.form =new FormGroup(
      {
        username:new FormControl('',[
          Validators.required,
          Validators.pattern('^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$')
        ]),
        email:new FormControl('',[
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
        ]),
        password:new FormControl('',[
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$')
        ])
      }
    )
  }

  // get username() {  
  //   return this.form.get('username')
  // }

  public onSubmit(): void {
    // console.log(this.form.value);
    const values=this.form.value;
    this.userlist = JSON.parse(localStorage.getItem('user') as any)|| [];
    console.log(this.userlist);
    this.userlist.push({values});
    localStorage.setItem('user', JSON.stringify(this.userlist));
    console.log(this.userlist);
    
  }

  public navigateLogin(){
    this.router.navigateByUrl('/login');
  }
}
