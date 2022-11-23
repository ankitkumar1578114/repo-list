import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { RepoCompComponent } from './components/repo-comp/repo-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    RepoListComponent,
    RepoCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
