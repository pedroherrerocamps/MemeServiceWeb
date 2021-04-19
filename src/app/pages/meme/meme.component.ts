import { MemeService } from './../../services/meme.service';
import { Component, OnInit } from '@angular/core';
import { SettingService } from 'src/app/services/setting.service';
import { Meme, MemeSearch } from 'src/app/models/meme.model';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.scss']
})
export class MemeComponent implements OnInit {

  publicUrl: string | undefined;
  memeList: Meme[] | undefined;
  memeDescription: string | undefined = "";
  memeName: string | undefined = "";
  searchMessage: string | undefined;

  constructor(private memeService: MemeService, private settingService: SettingService) { }

  ngOnInit(): void {
  }

  getMemes() {
    this.memeService.getMemes().subscribe((result) => {
      if (result) {
        this.memeList = result;
        this.searchMessage = undefined;
      }
    });
  }

  searchMemes() {
    if (this.checkMemeSearch()){
      this.memeService.searchMemes(this.buildMemeSearch()).subscribe((result) => {
        if (result) {
          this.searchMessage = undefined;
          this.memeList = result;
        }
      });
    } else {
      this.searchMessage = "You should insert a Meme Name or Description first!"
    }
  }


  checkMemeSearch(): boolean {
    if ((this.memeName === undefined || this.memeName === "") && (this.memeDescription === undefined || this.memeDescription === "")) {
      return false;
    }
    return true;
  }


  buildMemeSearch(): MemeSearch {
    const memeSearch: MemeSearch = new MemeSearch();
    if (this.memeName !== undefined && this.memeName !== "") {
      memeSearch.name = this.memeName;
    }
    if (this.memeDescription !== undefined && this.memeDescription !== "") {
      memeSearch.description = this.memeDescription;
    }
    return memeSearch;
  }
}
