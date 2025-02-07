import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { delay, tap } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  implements OnInit {

  
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(6), Validators.required]),
  });
  constructor( private router: Router, private authService: AuthService) { }
  ngOnInit() {
    initFlowbite();
    this.email.valueChanges.pipe(
      delay(2300),
      tap(console.log)
    ).subscribe();

    this.password.valueChanges.pipe(
      tap(console.log)
    ).subscribe();
  }
  get email() {
    return this.form?.get('email') as FormControl;
  }

  get password() {
    return this.form?.get('password') as FormControl;
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService.login({ email: this.email.value, password: this.password.value }).subscribe(
        response => {
          if (response) {
            document.getElementById('fermer')?.click();
            this.router.navigate(['/my']);
          }
        }
      );
    }
  }

}
