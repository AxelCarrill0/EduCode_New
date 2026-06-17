import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from "primeng/button";
import { RouterModule } from "@angular/router";
import { AvatarModule } from "primeng/avatar";
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings-content',
  standalone: true,
  imports: [CommonModule, ButtonModule, RouterModule, AvatarModule, InputSwitchModule, FormsModule],
  templateUrl: './settings-content.component.html',
  styleUrl: './settings-content.component.scss'
})
export class SettingsContentComponent {
  darkMode = false;
  emailNotifications = true;
  language = 'es';

  onDarkModeToggle(): void {
    // TODO: Implement dark mode logic
    // This will toggle a CSS class on the document body
    // document.body.classList.toggle('dark-mode', this.darkMode);
    console.log('Dark mode:', this.darkMode);
  }
}
