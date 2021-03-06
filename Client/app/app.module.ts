import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { SampleListComponent }  from './samples/sample-list.component';
import { SampleUserFilterPipe, SampleStatusFilterPipe} from './samples/sample-filter.pipe'
import { CreateSampleComponent } from './createSample/createSample.component'

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    HttpModule 
  ],
  declarations: [
    AppComponent,
    SampleListComponent,
    SampleUserFilterPipe,
    SampleStatusFilterPipe,
    CreateSampleComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
