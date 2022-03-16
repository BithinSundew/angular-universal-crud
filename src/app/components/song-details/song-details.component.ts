import { Component, OnInit } from '@angular/core';
import {Title,Meta} from "@angular/platform-browser";
import { SongService } from '../../shared/song.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.css']
})

export class SongDetailsComponent implements OnInit {
  updateSongForm: FormGroup;
activeId:any;
  constructor(
    private songService: SongService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder,
    private titleService:Title,
    private meta: Meta
    ) {
      this.titleService.setTitle("Song Details");
      this.meta.updateTag({ name: 'Song Details', content: 'Song Details' })
      this.meta.updateTag({ name: 'Song Details Description', content: 'Song Details Description' })
    }

  ngOnInit() {
    this.songForm();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.activeId=id;
    this.updateSongForm = this.fb.group({
      name: [''],
      artist: ['']
    })
    this.showEmp(id)
  }

  showEmp(id) {
    this.songService.getSong(id).subscribe((res) => {
      this.updateSongForm.setValue({
        name: res['name'],
        artist: res['artist']
      })
    })
  }

  songForm() {
    this.updateSongForm = this.fb.group({
      name: [''],
      artist: ['']
    })
  }

  updateSong() {
    if (!this.updateSongForm.valid) {
      return false;
    } else {
      let id = this.actRoute.snapshot.paramMap.get('id');
      this.songService.updateSong(id, this.updateSongForm.value)
        .subscribe(() => {
          this.router.navigateByUrl('/songs');
          console.log('Content updated successfully!')
        })
    }
  }
}
