import { Component } from '@angular/core';
import { CardModule } from "primeng/card";
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-modules-content',
  standalone: true,
  imports: [CardModule,ButtonModule,TagModule],
  templateUrl: './modules-content.component.html',
  styleUrl: './modules-content.component.scss'
})
export class ModulesContentComponent {

}
