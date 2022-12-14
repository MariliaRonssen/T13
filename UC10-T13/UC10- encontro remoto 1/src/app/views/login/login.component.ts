import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { empty } from 'rxjs';

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
      alert("deu certo");
      this.mensagem = 'Usuário logado com sucesso';
      this.router.navigateByUrl("/")
    }, (respostaErro) => {
      // alert("deu errado");
      // (this.mensagem = 'Usuário ou senha incorreto')
      
      if (respostaErro.error == "Email and password are required") {
        this.mensagem = "Digite email e senha"
      } else{
        this.mensagem = respostaErro.error}
        if (respostaErro.error == "Cannot find user") {
          this.mensagem = "usuario não encontrado"
        } else{
          this.mensagem = respostaErro.error}
          if (respostaErro.error == "Password is too short") {
            this.mensagem = "senha muito curta"
          } else{
            this.mensagem = respostaErro.error}
            if (respostaErro.error == "Incorrect password") {
              this.mensagem = "senha errada"
            } else {
              this.mensagem = respostaErro.error;
            }

    }

    )
  }
}
