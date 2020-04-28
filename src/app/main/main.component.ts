import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../service/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'myapp-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private token:TokenStorageService,private route:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.token.signOut();
    this.route.navigate(['signin']);
  }

}
