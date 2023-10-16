import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-testguard',
  templateUrl: './testguard.page.html',
  styleUrls: ['./testguard.page.scss'],
})
export class TestguardPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onClick(){

    let estado:NavigationExtras={
      state:{
        autorizado:1,
      }
    }
    this.router.navigate(["/conguardia"],estado);

  }
}
