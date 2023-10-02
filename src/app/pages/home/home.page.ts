import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,NavigationExtras } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  usuario_activo:Usuario={
    email:'',
    password:''
  }

  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
      //HAY QUE CAMBIARLO AL ONINIT EN VERSION 7
      //let usuario=this.router.getCurrentNavigation()?.extras.state;
      
    }

  

  ngOnInit()
  {
    this.usuario_activo=history.state.credenciales;
    console.log("EL USUARIO")
    console.log(this.usuario_activo.email);
  }

}
