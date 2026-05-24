import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-content',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout-content.component.html',
  styleUrl: './layout-content.component.scss'
})
export class LayoutContentComponent {

}
