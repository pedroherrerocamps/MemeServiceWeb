import { Component, OnInit } from '@angular/core';
import { Setting } from 'src/app/models/setting.model';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-post-setting',
  templateUrl: './post-setting.component.html',
  styleUrls: ['./post-setting.component.scss']
})
export class PostSettingComponent implements OnInit {

  idMessage: string | undefined;
  postMessage = "";
  settingId: string | undefined;
  setting = new Setting();
  constructor(private settingService: SettingService) { }

  ngOnInit(): void {
  }

  getSetting() {
    if(this.checkSettingId()) {
      this.settingService.getById(this.settingId!).subscribe((result) => {
        if (result) {
          this.setting = result;
        }
      });
    } else {
      this.idMessage = "You should insert an Id first!"
    }
  }

  deleteSetting() {
    if(this.checkSettingId()) {
      this.settingService.delete(this.settingId!).subscribe((result) => {
        console.log(result);
        if (result) {
          this.idMessage = "Deleted!";
        }
      });
    } else {
      this.idMessage = "You should insert an Id first!"
    }
  }

  addSetting() {
    if(this.validate()) {
      this.setting.id = undefined;
      this.setting.isEnabled = true;
      this.settingService.add(this.setting).subscribe((result) => {
        if (result) {
          this.postMessage = "Added!"
        }
      });
    }
  }

  editSetting(){
    if (this.validate()) {
      this.settingService.edit(this.setting).subscribe((result) => {
        if (result) {
          this.postMessage = "Edited!";
        }
      });
    }
  }

  checkSettingId(): boolean{
    if (this.settingId === undefined || this.settingId === "") {
      return false;
    }
    return true;
  }

  validate(): boolean {
    const initialMessage = "A good Setting needs a good "
    if (this.setting.name === undefined || this.setting.name === "") {
      this.postMessage = initialMessage + "name!";
      return false;
    }
    if (this.setting.value === undefined || this.setting.value === "") {
      this.postMessage = initialMessage + "original path!";
      return false;
    }
    return true;
  }


}
