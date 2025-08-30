import { Component } from '@angular/core';
import { StorageService } from '../../../../auth/services/storage.service';
import { Router, RouterLink } from '@angular/router';
import { MaterialModule } from '../../../../material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-nav',
  imports: [MaterialModule,CommonModule,RouterLink],
  templateUrl: './admin-nav.component.html',
  styleUrl: './admin-nav.component.css'
})
export class AdminNavComponent {
 isAdminLoggedIn: boolean = StorageService.isAdminLoggedIn();
    constructor(private router: Router) {
      this.router.events.subscribe(event => {
        this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
      
      });
    }

  
    logout()
    {
      StorageService.logout();
      this.router.navigateByUrl('/login');
    }

}


