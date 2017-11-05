import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {routerConfig} from './router.config';
import { AppComponent } from './app.component';
import { IndspireFormComponent } from './form/indspire-form/indspire-form.component';
import { HomeComponent } from './home/home.component';
import { MentorFormComponent } from './form/mentor-form/mentor-form.component';
import { MenteeFormComponent } from './form/mentee-form/mentee-form.component';
import { MenteeSecondaryComponent } from './form/mentee-secondary/mentee-secondary.component';
import { MentorFormSecondaryComponent } from './form/mentor-form-secondary/mentor-form-secondary.component';

@NgModule({
  declarations: [
    AppComponent,
    IndspireFormComponent,
    HomeComponent,
    MentorFormComponent,
    MenteeFormComponent,
    MenteeSecondaryComponent,
    MentorFormSecondaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
