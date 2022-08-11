import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userModel = new User()

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }


  //Função de Login
  signin(){
    console.log(this.userModel);

    this.userService.signin(this.userModel).subscribe(function(response){
      console.log(response);
      
    })

  }

}
