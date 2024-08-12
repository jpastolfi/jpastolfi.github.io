import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-link',
  standalone: true,
  imports: [],
  templateUrl: './card-common.component.html',
  styleUrl: './card-common.component.scss'
})
export class CardLinkComponent {
 @Input() title!: string;
 @Input() subtitle!: string;
 @Input() bgColor!: string;
}
