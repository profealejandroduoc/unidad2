import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  usuario_activo: Usuario = {
    email: '',
    password: ''
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    //HAY QUE CAMBIARLO AL ONINIT EN VERSION 7
    


  }



  ngOnInit() {
    let datos=this.router.getCurrentNavigation()?.extras.state;

    if(datos!==undefined){
      let usr=datos["credenciales"]
      this.usuario_activo.email=usr.email
      this.usuario_activo.password=usr.password;
      
      let mensaje=datos["saludo"]
      console.log(mensaje)
    }
    
  }

}
