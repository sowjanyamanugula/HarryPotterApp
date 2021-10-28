import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

const MaterialComponents=[MatToolbarModule,MatTableModule,MatPaginatorModule,MatCardModule,
  MatInputModule,MatFormFieldModule,MatSelectModule
]


@NgModule({
  declarations: [],
  imports: [
   
    MaterialComponents
  ],
  exports:[MaterialComponents]
})
export class MaterialModule { }
