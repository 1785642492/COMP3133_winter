import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { RemoveSpacesPipe } from './remove-spaces.pipe'; // Import your custom pipe
import { InputFormatDirective } from './input-format.directive'; // Import your custom directive

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    RemoveSpacesPipe, 
    InputFormatDirective 
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
