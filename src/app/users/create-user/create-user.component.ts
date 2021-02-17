import { UserService } from './../user.service';
import { RequestCreate, ResponseCreate } from './../user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  request: RequestCreate = {
    name: '',
    job: ''
  }

  response!: ResponseCreate;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  gravar(){
    this.userService.cerateUser(this.request).subscribe(res => {        
        alert(`Criado em: ${res.createdAt} \nId: ${res.id}\nNome: ${res.name}\nJob: ${res.job}`);
    });
  }

}
