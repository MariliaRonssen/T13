import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  mensagem: string = '';

  ngOnInit(): void {
  }

  userModel = new User();
  me = ""

  receberDados() {
    this.loginService.login(this.userModel).subscribe((response) => {
      // alert("deu certo");
      this.mensagem = 'Usuário logado com sucesso';
      this.router.navigateByUrl("/")
    }, (respostaErro) => {
      // alert("deu errado");
       alert(this.mensagem = 'Usuário ou senha incorreto')

      if(respostaErro.error == "Cannot find user"){
        this.me ="usuario não encontrado"
      }else
      this.me = respostaErro.error;
      
      
    }
    )
  }
}
