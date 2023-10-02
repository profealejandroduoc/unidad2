import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:Usuario={
    email:'',
    password:''
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.usuario.email=="waco@waco.cl" && this.usuario.password=="123")
    {
      //console.log("Listo!!!!");
      let ext:NavigationExtras={
        state:{
          credenciales:this.usuario,
          
        }
      }

      this.router.navigate(['/home'],ext)
      //console.log(ext)
    }
    else{
      console.log("No autorizado");
    }
  }
}
