import { Component } from '@angular/core';
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { RouterModule } from "@angular/router";
import { AvatarModule } from "primeng/avatar";

@Component({
  selector: 'app-settings-content',
  standalone: true,
  imports: [CardModule, ButtonModule, RouterModule, AvatarModule],
  templateUrl: './settings-content.component.html',
  styleUrl: './settings-content.component.scss'
})
export class SettingsContentComponent {

}
