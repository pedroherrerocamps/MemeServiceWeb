import { Component, OnInit } from '@angular/core';
import { Meme } from 'src/app/models/meme.model';
import { MemeService } from 'src/app/services/meme.service';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-post-meme',
  templateUrl: './post-meme.component.html',
  styleUrls: ['./post-meme.component.scss']
})
export class PostMemeComponent implements OnInit {

  idMessage: string | undefined;
  postMessage = "";
  memeId: string | undefined;
  meme = new Meme();
  constructor(private memeService: MemeService, private settingService: SettingService) { }

  ngOnInit(): void {
  }

  getMeme() {
    if(this.checkMemeId()) {
      this.memeService.getById(this.memeId!).subscribe((result) => {
        if (result) {
          this.meme = result;
        }
      });
    } else {
      this.idMessage = "You should insert an Id first!"
    }
  }

  deleteMeme() {
    if(this.checkMemeId()) {
      this.memeService.delete(this.memeId!).subscribe((result) => {
        console.log(result);
        if (result) {
          this.idMessage = "Deleted!";
        }
      });
    } else {
      this.idMessage = "You should insert an Id first!"
    }
  }

  addMeme() {
    if(this.validate()) {
      this.meme.id = undefined;
      this.meme.isEnabled = true;
      this.memeService.add(this.meme).subscribe((result) => {
        if (result) {
          this.postMessage = "Added!"
        }
      });
    }
  }

  editMeme(){
    if (this.validate()) {
      this.memeService.edit(this.meme).subscribe((result) => {
        if (result) {
          this.postMessage = "Edited!";
        }
      });
    }
  }

  checkMemeId(): boolean{
    if (this.memeId === undefined || this.memeId === "") {
      return false;
    }
    return true;
  }

  validate(): boolean {
    const initialMessage = "A good meme needs a good "
    if (this.meme.name === undefined || this.meme.name === "") {
      this.postMessage = initialMessage + "name!";
      return false;
    }
    if (this.meme.description === undefined || this.meme.description === "") {
      this.postMessage = initialMessage + "description!";
      return false;
    }
    if (this.meme.width === undefined) {
      this.postMessage = initialMessage + "width!";
      return false;
    }
    if (this.meme.height === undefined) {
      this.postMessage = initialMessage + "height!";
      return false;
    }
    if (this.meme.original === undefined || this.meme.original === "") {
      this.postMessage = initialMessage + "original path!";
      return false;
    }
    if (this.meme.thumbnail === undefined || this.meme.thumbnail === "") {
      this.postMessage = initialMessage + "thumbnail path!";
      return false;
    }
    return true;
  }


}
