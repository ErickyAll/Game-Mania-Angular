import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  userModel = new User();
  message: string = '';

  validateLogin(): boolean {
    const BLACKLIST = [
      'SELECT',
      'OR',
      '--',
      ';',
      '1 = 1',
      '1=1',
      'DROP',
      `\"\"=\"\"`,
    ];

    let validationBL = false;

    BLACKLIST.forEach((word) => {
      if (this.userModel.email?.toUpperCase().includes(word)) {
        validationBL = true;
      }
    });

    console.log('Blacklist on', validationBL);

    if (validationBL) {
      return false;
    }

    if (
      this.userModel.email === undefined ||
      this.userModel.email === '' ||
      this.userModel.password === undefined ||
      this.userModel.password === ''
    ) {
      return false;
    } else {
      return true;
    }
  }

  //Função de Login
  signin() {
    if (this.validateLogin()) {
      this.userService.signin(this.userModel).subscribe(
        //utilizando subscribe seguindo a biblioteca rxJS
        {
          next: (response) => {
            this.message = 'Logado com Sucesso!';
            this.router.navigate(['']);
          },
          error: (erro) => {
            this.message = ` ${erro.error} ${erro.status} ${erro.statusText}`;
          },
        }
      );
    } else {
      this.message = 'Preencha todos os campos corretamente';
    }
  }
}
