import { PostSettingComponent } from './pages/setting/post-setting/post-setting.component';
import { SettingComponent } from './pages/setting/setting.component';
import { PostMemeComponent } from './pages/meme/post-meme/post-meme.component';
import { MemeComponent } from './pages/meme/meme.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: MemeComponent
},
{
  path: 'memePost',
  component: PostMemeComponent
},
{
  path: 'settings',
  component: SettingComponent
},
{
  path: 'settingsPost',
  component: PostSettingComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
