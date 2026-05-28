import { Component } from '@angular/core';
import { CardModule } from "primeng/card";
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-laboratory-content',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './laboratory-content.component.html',
  styleUrl: './laboratory-content.component.scss'
})
export class LaboratoryContentComponent {

}
