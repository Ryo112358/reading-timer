import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConvertSecsToMinsPipe } from './pipes/convert-secs-to-mins.pipe';

@NgModule({
  declarations: [
    ConvertSecsToMinsPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ConvertSecsToMinsPipe
  ],
  providers: [
    ConvertSecsToMinsPipe
  ]
})
export class SharedModule { }