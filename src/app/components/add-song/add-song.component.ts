import { Component, OnInit } from '@angular/core';
import {Title,Meta} from "@angular/platform-browser";
import { SongService } from '../../shared/song.service';
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})

export class AddSongComponent implements OnInit {
  songForm: FormGroup;

  constructor(
    private songService: SongService,
    public fb: FormBuilder,
    private titleService:Title,
    private meta: Meta
  ) {
    this.titleService.setTitle("Add Song");
    this.meta.updateTag({ name: 'Add Song', content: 'Add Song' })
    this.meta.updateTag({ name: 'Add Song Description', content: 'Add Song Description' })
    this.form()
  }

  ngOnInit() { }

  form() {
    this.songForm = this.fb.group({
      name: [''],
      artist: ['']
    })
  }

  submit() {
    if (!this.songForm.valid) {
      return false;
    } else {
      this.songService.addSong(this.songForm.value)
        .subscribe((res) => {
          console.log(res)
          this.songForm.reset();
        })
    }
  }

}
