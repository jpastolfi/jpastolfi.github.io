import { Component } from '@angular/core';
import { CardLinkComponent } from "../../components/card-link/card-link.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardLinkComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
