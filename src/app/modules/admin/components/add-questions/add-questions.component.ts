import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { AdminNavComponent } from "../admin-nav/admin-nav.component";
import { MaterialModule } from '../../../../material.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-questions',
  imports: [RouterLink, DashboardComponent, MaterialModule, AdminNavComponent,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './add-questions.component.html',
  styleUrl: './add-questions.component.css'
})
export class AddQuestionsComponent {
questionForm!: FormGroup;

  categories = ['JAVA', 'HTML', 'MYSQL'];
  difficultyLevels = ['EASY', 'MEDIUM', 'HIGH'];

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private snackbar: MatSnackBar
  ) {
    this.questionForm = this.fb.group({
      questionTitle: ['', Validators.required],
      option1: ['', Validators.required],
      option2: ['', Validators.required],
      option3: ['', Validators.required],
      option4: ['', Validators.required],
      correctAnswer: ['', Validators.required],
      category: ['', Validators.required],
      difficultyLevel: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.questionForm.valid) {
      this.adminService.addQuestion(this.questionForm.value).subscribe({
        next: (res) => {
          this.snackbar.open('Question added successfully!', 'Close', { duration: 3000 });
          this.questionForm.reset();
        },
        error: () => {
          this.snackbar.open('Failed to add question', 'Close', { duration: 3000, panelClass: 'error-snackbar' });
        }
      });
    }
  }
}
