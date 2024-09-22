import { Component } from '@angular/core';
import { AppMaterialModule } from '../../_Shared/app-material/app-material.module';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    AppMaterialModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

}
