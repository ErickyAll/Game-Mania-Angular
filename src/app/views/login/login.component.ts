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

  //Função de Login
  signin() {
    // console.log(this.userModel);

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
  }
}
