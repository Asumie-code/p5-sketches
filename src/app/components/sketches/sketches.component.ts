import { Component } from '@angular/core';
import { MatGridListModule} from '@angular/material/grid-list'
import { SketchCardComponent } from '../sketch-card/sketch-card.component';
import { SketchComponent } from "../sketch/sketch.component";

@Component({
  selector: 'app-sketches',
  standalone: true,
  imports: [MatGridListModule, SketchCardComponent, SketchComponent],
  templateUrl: './sketches.component.html',
  styleUrl: './sketches.component.css'
})
export class SketchesComponent {

}
