import { Component } from '@angular/core';

@Component({
  selector: 'app-multiple-img',
  imports: [],
  templateUrl: './multiple-img.component.html',
  styleUrl: './multiple-img.component.css'
})
export class MultipleImgComponent {
imgpath:string="./images/prabas.jpg";
imgName:string="prabas";

prabas(){
  this.imgpath='./images/prabas.jpg';
}
allu(){
  this.imgpath='./images/allu.jpg';
}
goat(){
  this.imgpath='./images/goat.jpg';
}
jailer(){
  this.imgpath='./images/jailer.jpg';
}
}
