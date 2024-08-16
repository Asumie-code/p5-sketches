import {ChangeDetectionStrategy,  Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-sketch-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './sketch-card.component.html',
  styleUrl: './sketch-card.component.css', 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SketchCardComponent {

}
