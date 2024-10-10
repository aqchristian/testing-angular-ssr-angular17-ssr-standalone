import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PostInterface } from '../../../core/models/post.inteface';
import { PostService } from '../../../core/services-api/post.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-post-list',
  standalone: true,
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  imports: [CommonModule, HttpClientModule],
  providers: [PostService],
})
export class PostListComponent {
  posts$: Observable<Array<PostInterface>>;
  loadingSkeletons = Array(3).fill(0);

  constructor(private postService: PostService) {
    this.posts$ = this.postService.getPosts({ _limit: 10 });
  }
}
