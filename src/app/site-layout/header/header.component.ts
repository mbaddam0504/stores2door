import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  imageUrl:string=""
  iconUrl: string;

  constructor() {
    this.imageUrl = 'assets/images/images.png'
    this.iconUrl = 'assets/images/icon.jpg'
   }

  ngOnInit(): void {
    this.imageUrl = 'assets/images/images.png'
    this.iconUrl = 'assets/images/icon.jpg'
  }

}
