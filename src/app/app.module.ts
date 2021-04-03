import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module'
import { AppModuleAdmin } from './modules/admin/app.module';
import { AppModuleAuthen } from './modules/authen/app.module';
import { AppModuleCommon } from './modules/common/app.module';
import { AppModuleCourses } from './modules/courses/app.module';
import { AppModuleMenu } from './modules/menu/app.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppModuleAdmin,
    AppModuleAuthen,
    AppModuleCommon,
    AppModuleCourses,
    AppModuleMenu
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
