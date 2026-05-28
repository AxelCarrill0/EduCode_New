import { Component } from '@angular/core';
import { CardModule } from "primeng/card";
import { ProgressBarModule } from "primeng/progressbar";
import { ButtonModule } from 'primeng/button';
import { TagModule } from "primeng/tag";
@Component({
  selector: 'app-progress-content',
  standalone: true,
  imports: [CardModule, ProgressBarModule, ButtonModule, TagModule],
  templateUrl: './progress-content.component.html',
  styleUrl: './progress-content.component.scss'
})
export class ProgressContentComponent {

}
