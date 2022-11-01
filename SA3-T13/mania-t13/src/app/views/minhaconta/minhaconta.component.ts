 import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-minhaconta',
  templateUrl:'./minhaconta.component.html',
  styleUrls: ['./minhaconta.component.css']
})
export class MinhacontaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userModel = new User();
  

  receberDados() {
    console.log(this.userModel)
  }
}
