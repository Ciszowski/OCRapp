import { NgModule } from '@angular/core';
import { MatFormFieldModule,
      MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule, 
  MatInputModule} from '@angular/material';

const materialModule = [
  MatButtonModule,
  MatFormFieldModule,
  MatCardModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatInputModule
]

@NgModule({
  declarations: [],
  imports: [materialModule],
  exports: [materialModule]
})
export class MaterialModule { }
