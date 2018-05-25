import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubmoduleModule } from './submodule/submodule.module';
import { DefaultRootComponent } from './default-root/default-root.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultRootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SubmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
