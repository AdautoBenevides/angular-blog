import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  photoCover: string = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e737d025-51b8-4b27-93ad-e98aa14f2fb5/d2vfetm-024b469f-90fe-4405-afc2-901851bfe3da.jpg/v1/fill/w_1192,h_670,q_70,strp/naruto_sennin_mode_wallpaper_by_klarisag_d2vfetm-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZTczN2QwMjUtNTFiOC00YjI3LTkzYWQtZTk4YWExNGYyZmI1XC9kMnZmZXRtLTAyNGI0NjlmLTkwZmUtNDQwNS1hZmMyLTkwMTg1MWJmZTNkYS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.rxaUbZoKD8CinLa9faENyKvSrqPb7hXGOb9xyW56Hbs"
  @Input()
  contentTitle: string = "MINHA NOTICIA"
  @Input()
  contentDescription: string = "Olá mundo"

  constructor() { }

  ngOnInit(): void {
  }

}
