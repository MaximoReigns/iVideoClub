import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.page.html',
  styleUrls: ['./autor.page.scss'],
})
export class AutorPage {

  autor: {
    name: string,
    email: string,
    twitter: string,
    phone: number
};

  constructor(private router : Router ) {
  };

  curriculum(){
    this.router.navigateByUrl("/curriculum");
  }

}
