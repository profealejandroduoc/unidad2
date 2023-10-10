import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  
  usuario:Usuario={
    email:'',
    password:''
  }

  constructor(private storage: Storage) { }

  ngOnInit() {
  }

  async onSubmit()
  {
    //await this.storage.set('name', 'Mr. Ionitron');
    await this.storage.set(this.usuario.email,this.usuario);
    this.obtenerUsuario();
  }

  async obtenerUsuario()
  {
    await console.log(this.storage.get('waco@waco.cl'));
  }

}
