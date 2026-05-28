import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';


@Component({
  selector: 'app-home-content',
  standalone: true,
  imports: [ButtonModule, InputTextModule, CardModule, RouterModule, TagModule, DividerModule],
  templateUrl: './home-content.component.html',
  styleUrl: './home-content.component.scss',

})
export class HomeContentComponent {
  visible: boolean = false;

  //este metodo nos ayuda a hacer scroll a la parte superior de la página
  //cuando hacemos click en inio en el footer
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
