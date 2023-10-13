import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { ImageCardComponent } from './imageCard/imageCard.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    ImageCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
