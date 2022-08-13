import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  userModel = new User();
  message: string = '';

  validateLogin(): boolean {
    if (
      this.userModel.usuario === undefined ||
      this.userModel.usuario === '' ||
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
      console.log(this.userModel);

      this.userService.signin(this.userModel).subscribe(
        //utilizando subscribe seguindo a biblioteca rxJS
        {
          next: (response) => {
            this.message = 'Logado com Sucesso!';
          },
          error: (erro) => {
            this.message = ` ${erro.error} ${erro.status} ${erro.statusText}`;
          },
        }
      );
    } else {
      this.message = 'Preencha todos os campos';
    }
  }
}
