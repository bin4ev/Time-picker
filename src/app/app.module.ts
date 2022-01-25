import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { SelectTimeComponent } from './select-time/select-time.component';
import { FormTestComponent } from './form-test/form-test.component';
import { TimePickerDirective } from './form-test/form-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TimePickerComponent,
    SelectTimeComponent,
    FormTestComponent,
    TimePickerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
