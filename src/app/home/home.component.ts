import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './figure-effect.scss']
})
export class HomeComponent implements OnInit {

  constructor() {

   }

  ngOnInit() {
  
  }

  goPortfolio() {
    console.log('goPortfolio()');
  }
}
