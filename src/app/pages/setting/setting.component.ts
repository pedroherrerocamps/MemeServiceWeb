import { Component, OnInit } from '@angular/core';
import { Setting } from 'src/app/models/setting.model';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  publicUrl: string | undefined;
  settingList: Setting[] | undefined;
  settingName: string | undefined = "";
  settingValue: string | undefined = "";

  constructor(private settingService: SettingService) { }

  ngOnInit(): void {
  }

  getSettings() {
    this.settingService.getSettings().subscribe((result) => {
      if (result) {
        this.settingList = result;
      }
    });
  }

}
