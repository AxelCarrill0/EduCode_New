import { Component } from '@angular/core';
import { CardModule } from "primeng/card";
import { TagModule } from "primeng/tag";
import { ProgressBarModule } from 'primeng/progressbar';
import { DividerModule } from 'primeng/divider';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-dashboard-content',
  standalone: true,
  imports: [CardModule, TagModule, ProgressBarModule, DividerModule, RouterModule, ButtonModule],
  templateUrl: './dashboard-content.component.html',
  styleUrl: './dashboard-content.component.scss'
})
export class DashboardContentComponent {

}
