import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ReversePipe } from './shared/reverse.pipe';
import { InnerDivComponent } from './inner-div/inner-div.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ReversePipe,
    InnerDivComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
