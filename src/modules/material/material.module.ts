import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';


const MaterialComponents=[MatToolbarModule,MatTableModule,MatPaginatorModule,MatCardModule
]


@NgModule({
  declarations: [],
  imports: [
   
    MaterialComponents
  ],
  exports:[MaterialComponents]
})
export class MaterialModule { }
