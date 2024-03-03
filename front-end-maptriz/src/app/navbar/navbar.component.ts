import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../Services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private storageServices: LocalStorageService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  handleLogOff() {
    this.storageServices.removeItem('userId');
    this.router.navigate(['login']);
  }
}
