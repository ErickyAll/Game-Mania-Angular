import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

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

  // Comando para rodar json server
  // json-server db.json -m ./node_modules/json-server-auth

  signup() {
    if (this.validateLogin()) {
      this.userService.signUp(this.userModel).subscribe(
        //utilizando subscribe seguindo a biblioteca rxJS
        {
          next: (response) => {
            this.message = 'Cadastrado com Sucesso!';
            this.router.navigate(['']);
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
