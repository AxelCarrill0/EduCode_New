import { Component } from '@angular/core';
import { CardModule } from "primeng/card";

@Component({
  selector: 'app-dashboard-content',
  standalone: true,
  imports: [CardModule],
  templateUrl: './dashboard-content.component.html',
  styleUrl: './dashboard-content.component.scss'
})
export class DashboardContentComponent {

}
