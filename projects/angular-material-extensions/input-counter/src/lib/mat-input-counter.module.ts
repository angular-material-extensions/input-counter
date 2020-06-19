import { NgModule } from '@angular/core';
import { InputCounterComponent } from './input-counter.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FlexModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [InputCounterComponent],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FlexModule,
    FormsModule
  ],
  exports: [InputCounterComponent]
})
export class MatInputCounterModule { }
