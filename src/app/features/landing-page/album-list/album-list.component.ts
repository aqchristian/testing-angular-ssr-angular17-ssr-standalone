import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumInterface } from '../../../core/models/album.interface';
import { AlbumService } from '../../../core/services-api/album.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-album-list',
  standalone: true,
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
  imports: [CommonModule, HttpClientModule],
  providers: [AlbumService],
})
export class AlbumListComponent {
  albums$: Observable<Array<AlbumInterface>>;
  loadingSkeletons = Array(3).fill(0);

  constructor(private albumService: AlbumService) {
    this.albums$ = this.albumService.getAlbums({ _limit: 10 });
  }
}
