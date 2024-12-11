import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImgComponent } from './tasks/img/img.component';
import { MultipleImgComponent } from './tasks/multiple-img/multiple-img.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ImgComponent,MultipleImgComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My_Angular';
}
