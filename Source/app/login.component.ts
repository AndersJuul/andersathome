import { Component } from '@angular/core';
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
    selector: 'login-component',
    styles: [`
        em { float: right; color:#E05C65; padding-left:10px;}
    `    
    ],
    template: `
        <h1>Login</h1>
        <hr>
        <div class="col-md-4">
        <form #loginForm="ngForm" (ngSubmit)="login(loginForm.value)" autocomplete="off" novalidate>
            <div class="form-group" >
            <label for="userName">User Name:</label>
            <em *ngIf="loginForm.controls.userName?.invalid  && mouseoverLogin">Påkrævet</em>
            <input (ngModel)="userName" name="userName" id="userName" type="text" class="form-control" placeholder="User Name..." required/>
            </div>
            <div class="form-group" >
            <label for="password">Password:</label>
            <em *ngIf="loginForm.controls.password?.invalid && mouseoverLogin">Påkrævet</em>
            <input (ngModel)="password" name="password" id="password" type="password" class="form-control"placeholder="Password..." required/>
            </div>
                
            <span (mouseenter)="mouseoverLogin=true" (mouseleave)="mouseoverLogin=false">
                <button type="submit" class="btn btn-primary" [disabled]="loginForm.invalid">Login</button>
            </span>
            <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
        </form>
        </div>  `
})
export class LoginComponent {
    constructor(private authService: AuthService, private router: Router){

    }

    login(formValues){
        this.authService.loginUser(formValues.userName, formValues.password);
        this.router.navigate([''])
    }
    cancel(){
        this.router.navigate([''])
    }
}