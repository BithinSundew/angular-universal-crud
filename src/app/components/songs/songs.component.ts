import { Component, OnInit } from '@angular/core';
import {Title,Meta} from "@angular/platform-browser";
import { SongService } from '../../shared/song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})

export class SongsComponent implements OnInit {

  Songs: any = [];

  constructor(private songService: SongService,
    private titleService:Title,
    private meta: Meta
    ) {
      this.titleService.setTitle("Song List");
      this.meta.updateTag({ name: 'Song List', content: 'Song List' })
      this.meta.updateTag({ name: 'Song List Description', content: 'Song List Description' })
    this.songService.getSongs().subscribe((item) => {
      this.Songs = item;
    });
  }

  ngOnInit() { }

  removeSong(employee, i) {
    if (window.confirm('Are you sure?')) {
      this.songService.deleteSong(employee._id)
        .subscribe((res) => {
          this.Songs.splice(i, 1);
        }
        )
    }
  }

}
