import { Component } from '@angular/core';
import { TokenStorageService } from './service/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Client';
constructor(private token:TokenStorageService,private route:Router){}



  onmain(){
    this.route.navigate(['main']);

  }

}
