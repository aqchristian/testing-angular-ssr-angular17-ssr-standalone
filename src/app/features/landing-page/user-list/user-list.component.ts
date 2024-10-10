import { Component } from '@angular/core';
import { UserService } from '../../../core/services-api/user.service';
import { Observable } from 'rxjs';
import { UserInterface } from '../../../core/models/user.interface';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  imports: [CommonModule, HttpClientModule],
  providers: [UserService],
})
export class UserListComponent {
  users$: Observable<Array<UserInterface>>;
  loadingSkeletons = Array(3).fill(0);

  constructor(private userService: UserService) {
    this.users$ = this.userService.getUsers();
  }
}
