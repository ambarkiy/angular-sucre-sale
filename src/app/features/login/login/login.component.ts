import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/domain/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // autre façon de déclarer un formulaire
  // loginForm = new FormGroup({
  //   username: new FormControl(''),
  //   lastName: new FormControl(''),
  // });

  loginForm = this.fb.group({
    username: [''],
    password: [''],
  });

  isLogged: boolean;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('onSubmit');
    const { username, password } = this.loginForm.value;
    this.isLogged = this.userService.login(username, password);
    if (this.isLogged) {
      this.router.navigate(['/admin']);
    }
  }
}
