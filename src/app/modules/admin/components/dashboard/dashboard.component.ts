import { Component } from '@angular/core';
import { StorageService } from '../../../../auth/services/storage.service';
import { Router, RouterLink } from '@angular/router';
import { MaterialModule } from '../../../../material.module';
import { CommonModule } from '@angular/common';
import { AdminNavComponent } from '../admin-nav/admin-nav.component';

@Component({
  selector: 'app-dashboard',
  imports: [MaterialModule,CommonModule,RouterLink,AdminNavComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

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
