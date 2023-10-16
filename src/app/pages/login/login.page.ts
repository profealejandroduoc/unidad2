import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';
import { Storage } from '@ionic/storage-angular';

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
  constructor(private router:Router, private storage: Storage) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.usuario.email=="waco@waco.cl" && this.usuario.password=="123")
    {
      this.activar(1);
      //console.log("Listo!!!!");
      let ext:NavigationExtras={
        state:{
          credenciales:this.usuario,
          saludo:"Hola mundo!!!",
          
        }
      }

      this.router.navigate(['/home'],ext)
      //console.log(ext)
    }
    else{
      console.log("No autorizado");
      this.activar(0);
    }
  }


  async activar(valor:Number)
  {
    await this.storage.set("sesion",valor);
  }



}
