import {ChangeDetectionStrategy,  Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-sketch-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './sketch-card.component.html',
  styleUrl: './sketch-card.component.css', 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SketchCardComponent {
 @Input() link = ''
 @Input() title = ''
 @Input() desc = ''
 
}
