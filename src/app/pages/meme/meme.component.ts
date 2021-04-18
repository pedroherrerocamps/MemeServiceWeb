import { MemeService } from './../../services/meme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.scss']
})
export class MemeComponent implements OnInit {

  constructor(private memeService: MemeService) { }

  ngOnInit(): void {
    this.memeService.getMemes().subscribe((result) => {
      console.log(result);
    });

  }

}
