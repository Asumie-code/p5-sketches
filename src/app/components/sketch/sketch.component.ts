import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import p5 from 'p5'



@Component({
  selector: 'app-sketch',
  standalone: true,
  imports: [],
  templateUrl: './sketch.component.html',
  styleUrl: './sketch.component.css'
})
export class SketchComponent implements OnInit {
  canvas: any

  constructor(private route: ActivatedRoute) {}

   async ngOnInit() {
    const path = this.route.snapshot.paramMap.get('path')
    const sketch =  await import(`../../p5_sketch/${path}.ts`) 
    this.canvas = new p5(sketch.sketch)
  
    
    
  }
}
