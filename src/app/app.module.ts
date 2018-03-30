import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthGuardService } from './auth-guard.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';
import { BannerComponent } from './banner/banner.component';
import { BoldDirective } from './bold.directive';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    ProfileComponent,
    ListComponent,
    BannerComponent,
    BoldDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HttpClient, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
