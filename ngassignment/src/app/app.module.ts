import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './mycomp/./login/login.component';
import { HomeComponent } from './mycomp/./home/home.component';
import { ListResultComponent } from './mycomp/list-result/list-result.component';
import { StudentFormComponent } from './mycomp/student-form/student-form.component';
import { FormsModule } from '@angular/forms';
import { CheckAuthComponent } from './mycomp/check-auth/check-auth.component';
import { SearchResultComponent } from './mycomp/search-result/search-result.component';
import { EditformComponent } from './mycomp/editform/editform.component';
import { LogoutComponent } from './mycomp/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ListResultComponent,
    StudentFormComponent,
    CheckAuthComponent,
    SearchResultComponent,
    EditformComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
