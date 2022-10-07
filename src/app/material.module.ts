import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
//import {MatCheckboxModule} from '@angular/material/checkbox';


const material = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
 // MatCheckboxModule
]

@NgModule({
  declarations: [],
  imports: [material],
  exports:[material]
})
export class MaterialModule { }
