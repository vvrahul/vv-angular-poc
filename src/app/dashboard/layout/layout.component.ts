import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router, ) { }

  ngOnInit() {
  }

  onLogout() {
    localStorage.removeItem("isLoggedIn");
    this.router.navigate(['']);
  }

}
