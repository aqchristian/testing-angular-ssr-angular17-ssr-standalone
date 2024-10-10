import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserListComponent } from '../user-list/user-list.component';
import { AlbumListComponent } from '../album-list/album-list.component';
import { PostListComponent } from '../post-list/post-list.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  imports: [
    CommonModule,
    RouterModule,
    UserListComponent,
    AlbumListComponent,
    PostListComponent,
  ],
})
export class LandingPageComponent {}
