import { Component } from '@angular/core';

@Component({
  selector: 'app-img',
  imports: [],
  templateUrl: './img.component.html',
  styleUrl: './img.component.css'
})
export class ImgComponent {
  imgpath:string="./images/goat.jpg";
  imgName:string="goat";
  

  toggle(){
    if (this.imgName=='goat'){
      this.imgpath='./images/jailer.jpg';
      this.imgName='jailer';
    }
    else{
      this.imgpath='./images/goat.jpg';
      this.imgName='jailer';
    }
  }
}
